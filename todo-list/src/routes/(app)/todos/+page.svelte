<script>
    let {data} = $props();
    

</script>

<h1>ye todos:</h1>
{#each data.todos as todo}
    <p>{todo.text}<br></p>
{/each}
