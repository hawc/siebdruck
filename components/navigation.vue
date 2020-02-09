<template>
    <div class="wrap">
        <nav class="headerNav">
            <ul class="headerNav__list">
                <li class="headerNav__item">
                    <a href="/materialien" class="headerNav__link">Materialien</a>
                    <i class="navSpacer" aria-hidden>&mdash;</i>
                    <ul class="navigation__list">
                        <li class="navigation__item">
                            <a href="/siebe" class="navigation__link">Siebe</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/papier" class="navigation__link">Papier</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/rakel" class="navigation__link">Rakel</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/geraete" class="navigation__link">Geräte</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/textilien" class="navigation__link">Textilien</a>
                        </li>
                    </ul>
                </li>
                <li class="headerNav__item">
                    <a href="/techniken" class="headerNav__link">Techniken</a>
                    <i class="navSpacer" aria-hidden>&mdash;</i>
                    <ul class="navigation__list">
                        <li class="navigation__item">
                            <a href="/beschichten" class="navigation__link">Beschichten</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/belichten-auswaschen" class="navigation__link">Belichten & Auswaschen</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/drucken" class="navigation__link">Drucken</a>
                        </li>
                        <li class="navigation__item">
                            <a href="/entschichten" class="navigation__link">Entschichten</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
    .headerNav {
        text-align: center;
        font-size: 0.85rem;
        margin: 25px 0 50px;
    }
    .headerNav__link,
    .navigation__list,
    .navigation__item {
        display: inline-block;
        line-height: 1.5rem;
    }
    .navigation__link {
        margin: 0 5px;
    }
    .navSpacer {
        padding-left: 5px;
    }
</style>
