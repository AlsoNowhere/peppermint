export default `<footer class="flex">
    <div class="grid-small-6"></div>
    <div class="flex grid-small-6">
        <button type="button" class="large square margin-right" (click)="goLeft">
            <span class="fa fa-chevron-left"></span>
        </button>
        <button type="button" class="large square margin-right" (click)="goHome">
            <span class="fa fa-home"></span>
        </button>
        <button type="button" class="large square margin-right" (click)="goRight">
            <span class="fa fa-chevron-right"></span>
        </button>
        <form (submit)="nosubmit">
            <label>
                <input name="search" (input)="updateSearch" #search />
            </label>
        </form>
    </div>
</footer>`