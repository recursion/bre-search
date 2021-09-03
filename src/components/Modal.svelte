<script>
    import { navState } from "../stores/nav";
    // generate style based on screen size
    let modalStyle = "";
    $: {
        const width = window.screen.width;
        if (width > 1024) {
            modalStyle = `left: ${$navState.position.left};top:${$navState.position.top};`
            console.log("Desktop: ", modalStyle);
        } else if (width > 768) {
            modalStyle = `position: relative;margin: 15vh auto;width:40vw;`;
            console.log("Tablet: ", modalStyle);
        } else {
            modalStyle = `top:20px;left:10px;right:10px;bottom:50px;`;
            console.log("Mobile: ", modalStyle);
        }
    };
</script>

<div
    on:click={navState.reset}
    class="bre-overlay {$navState.current === '' ? 'hidden' : ''}"
>
    <div
        class="bre-modal"
        style="{modalStyle}"
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
        background-color: var(--e-global-color-primary);
        color: var(--e-global-color-secondary);
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
        color: var(--e-global-color-primary);
    }
    .bre-modal-content {
        padding: 20px;
        color: var(--e-global-color-primary);
    }

    :global(.bre-modal-content button) {
        border: 1px solid var(--e-global-color-primary);
        color: var(--e-global-color-primary);
        background: none;
    }
    :global(.bre-modal-content button:hover) {
        background-color: var(--e-global-color-primary);
        color: white;
        transition: color 0.5s, background-color 0.5s;
    }

    :global(.bre-modal .footer button) {
        border: 1px solid white;
        color: white;
        background: none;
    }
    :global(.bre-modal .footer button:hover) {
        background-color: var(white);
        color: var(--e-global-color-text);
        border-color: var(--e-global-color-text); 
        transition: color 0.5s, background-color 0.5s, border 1s;
    }
</style>
