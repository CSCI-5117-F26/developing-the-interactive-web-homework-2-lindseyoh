<script>
    let {data} = $props();
</script>
<style>
    /* .preview {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        } */
    </style>

<a href="/todos">Back to Todos</a>
<form method="POST" action="?/save">
    <label for="text">Edit TODO:</label>
    <textarea id="text" name="text" placeholder="Write todo here">{data.todo.text}</textarea>
    <button>Save</button>
</form>



{#if data.todo.done}
    <p>This todo is donezo !!!</p>
{:else}
    <form method="POST" action="?/markDone">
        <button>Mark as Done</button>
    </form>
{/if}

