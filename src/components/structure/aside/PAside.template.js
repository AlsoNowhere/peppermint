export default `<aside class="fixed pinned top right padding-large" dill-if="hasResults">
    <div class="padded-top-large">
        <ul class="reset-list">
            <li class="card padded" (click)="goToPage" style="width:220px;" dill-for="results">
                <p class="line-height trim no-wrap">{{label}}</p>
            </li>
        </ul>
    </div>
</aside>`