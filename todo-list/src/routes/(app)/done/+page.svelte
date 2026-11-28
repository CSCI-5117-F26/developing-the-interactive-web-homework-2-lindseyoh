<script>
    let {data} = $props();
</script>
<style>
    /* wanted a strikethrough! */
    /* https://www.w3schools.com/cssref/playdemo.php?filename=playcss_text-decoration-line */
    .done { 
        text-decoration: line-through; 
        color: gray; 
    }

    /* Referenced: https://stackoverflow.com/questions/17704539/css-getting-text-in-one-line-rather-than-two */
    /* longer tut I skimmed: https://www.digitalocean.com/community/tutorials/css-prevent-line-break  */
    .preview {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>

<h1>Done:</h1>
{#each data.todos as todo}
    <a class="done preview" href="/todo/{todo.id}">{todo.text}</a>
{/each}
<a href="/todos">Back to Todos</a>
