<script lang="ts">
import type { UserWithVotes } from '$lib/models/users.js'
import TD from '$lib/components/TD.svelte'
import TH from '$lib/components/TH.svelte'
import { CategoryMap, Categories } from '$lib/nominees'
import type { Category} from '$lib/nominees'
import axios from 'axios'

export let data

const TIED_WINNERS: Record<string, string[]> = {
  'Best Live Action Short Film': ['The Singers', 'Two People Exchanging Saliva']
}

function isCorrect(categoryName: string, nominee: string): boolean {
  const tied = TIED_WINNERS[categoryName]
  if (tied) return tied.includes(nominee)
  return nominee === data.winners[categoryName]
}

async function fetchWinners() {
  try {
    const res = await axios.get<Record<string, string>>('/api/winners')
    const winners = res.data
    data.winners = winners
  } catch (e) {
    console.error('Having trouble fetching winners')
  }
}

function score (user: UserWithVotes): number {
  let sum = 0

  for (const vote of user.votes) {
    const category = CategoryMap[vote.category]

    if (isCorrect(vote.category, vote.nominee)) {
      sum += category.points
    }
  }

  return sum
}

type DispalyUserModel = UserWithVotes & {
  score: number
  voteMap: Record<string, string>
}

$: usersWithVotesAndScores = data.paidUsers.map<DispalyUserModel>(user => ({
  ...user,
  score: score(user),
  voteMap: Object.fromEntries(user.votes.map(vote => [vote.category, vote.nominee])),
}))

$: sortedUsersWithVotesAndScores = usersWithVotesAndScores.sort((a, b) => b.score - a.score)

function votePrefix(user: DispalyUserModel, category: Category): string {
  if (!data.winners[category.name] && !TIED_WINNERS[category.name]) return ''
  return isCorrect(category.name, user.voteMap[category.name]) ? '✅ - ' : '❌ - '
}

// Get winners every 5 seconds
setInterval(fetchWinners, 5000)
</script>

<table class="w-full border-collapse border border-gray-400">
  <thead>
    <tr class="bg-gray-200">
      <TH classNames="text-left">Name</TH>
      <TH>Score</TH>
      <TH>Paid</TH>
      {#each Categories as category}
        <TH >{category.name}</TH>
      {/each}
    </tr>
  </thead>
  <tbody>
    <tr>
      <TD>Winner</TD>
      <TD></TD>
      <TD></TD>
      {#each Categories as category}
        <TD>{TIED_WINNERS[category.name]?.join(' / ') ?? data.winners[category.name] ?? ''}</TD>
      {/each}
    </tr>
    <tr>
      <TD>Points</TD>
      <TD></TD>
      <TD></TD>
      {#each Categories as category}
        <TD>{category.points}</TD>
      {/each}
    </tr>
    {#each sortedUsersWithVotesAndScores as user}
      <tr class="{data.user.id === user.id ? 'bg-yellow-50': ''}">
        <TD classNames="text-left">
          {user.displayName}
        </TD>
        <TD>{user.score}</TD>
        <TD>
          {user.paid ? '✅' : '❌'}
        </TD>
        {#each Categories as category}
          <TD>
            {votePrefix(user, category)}{user.voteMap[category.name] ?? ''}
          </TD>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>