<template>
    <footer class="footerNav">
        <ul class="footerNav__list">
            <li class="footerNav__item">
                <a href="/ueber">Über</a>
            </li>
            <li class="footerNav__item">
                <a href="https://github.com/hawc/siebdruck"
                   target="_blank"
                   rel="noopener">
                    GitHub
                </a>
            </li>
            <li class="footerNav__item">
                <a href="/impressum">Impressum</a>
            </li>
        </ul>
    </footer>
</template>

<style lang="scss">
    .footerNav {
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        font-size: 0.85rem;
        margin: 30px 0;
    }
    .footerNav__item {
        display: inline-block;
        margin: 0 20px; 
        line-height: 0;
    }
</style>
