<script>
    import { navState } from "../stores/nav";
</script>

<div
    on:click={navState.reset}
    class="bre-overlay {$navState.current === '' ? 'hidden' : ''}"
>
    <div
        class="bre-modal"
        style={`left: ${$navState.position.left};top:${$navState.position.top};`}
        on:click|stopPropagation={() => {}}
    >
        <div class="bre-modal-content">
            <slot />
        </div>
        <div class="footer">
            <button on:click={navState.reset}>Done</button>
        </div>
    </div>
</div>

<style>
    .footer {
        background-color: blue;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
    }
    .footer button {
        position: absolute;
        right: 10px;
        bottom: 5px;
        margin: 0;
    }
    .hidden {
        display: none;
    }
    .bre-overlay {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 9999999;
        background-color: rgba(0, 0, 0, 0.25);
    }
    .bre-modal {
        background-color: white;
        border-radius: 20px;
        width: auto;
        height: auto;
        padding-bottom: 50px;
        z-index: 9999999999;
        position: absolute;
    }
    .bre-modal-content {
        padding: 20px;
    }
</style>
