<template>
    <div class="wrap">
        <nav class="headerNav">
            <ul class="headerNav__list">
                <li class="headerNav__item">
                    <a href="/techniken" class="headerNav__link">Techniken</a>
                    <ul class="navigation__list">
                        <li class="navigation__item">
                            <a href="/beschichten">Beschichten</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/belichten-auswaschen">Belichten & Auswaschen</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/drucken">Drucken</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/entschichten">Entschichten</a>
                        </li>
                    </ul>
                </li>
                <li class="headerNav__item">
                    <a href="/materialien" class="headerNav__link">Materialien</a>
                    <ul class="navigation__list">
                        <li class="navigation__item">
                            <a href="/siebe">Siebe</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/papier">Papier</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/rakel">Rakel</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/geraete">Geräte</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/textilien">Textilien</a>
                        </li>
                    </ul>
                </li>
                <li class="headerNav__item">
                    <a href="/ueber">Über</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
    .headerNav {
        text-align: center;
    }
    .headerNav__link {
        display: inline-block;
    }
    .navigation__item {
        display: inline-block;
    }
</style>
