<script>
    let {data} = $props();
    

</script>

<form method="POST" action="?/create">
    <input name="text" placeholder="write todo here"/>
    <button>Add Todo</button>
</form>

<h1>ye todos:</h1>
{#each data.todos as todo}
    <p>{todo.text}</p>
    <form method="POST" action="?/markDone">
    <input type="hidden" name="id" value={todo.id}/>
    <button>Mark as Done</button>
</form>
{/each}
