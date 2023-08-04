import './Skills.css'

function Skills () {
    return <section class="skills" id="skills">
    <h3 class="skills__title">Skills</h3>
    <div class="skills__line">
        <div class="skills__box">
            <ul>
                <li class="skills__img"><img src="img/htlm.png"/></li>
                <li class="skills__name"> HTML 5</li>
            </ul>
        </div>

        <div class="skills__box">
            <ul>
                <li class="skills__img"> <img src="img/js_icon.png" alt=""/></li>
                <li class="skills__name">Javascript</li>
            </ul>
        </div>

        <div class="skills__box">
            <ul>
                <li class="skills__img"> <img src="img/php_icon.png" alt=""/></li>
                <li class="skills__name">PHP</li>
            </ul>
        </div>

        <div class="skills__box">
            <ul>
                <li class="skills__img"><img src="img/nodejs_icon.png" alt=""/></li>
                <li class="skills__name">NodeJS</li>
            </ul>
        </div>

        <div class="skills__box">
            <ul>
                <li class="skills__img"> <img src="img/react_icon.png" alt=""/> </li>
                <li class="skills__name">React</li>
            </ul>
        </div>

        <div class="skills__box">
            <ul>
                <li class="skills__img"> <img src="img/css_icon.png" alt=""/> </li>
                <li class="skills__name">CSS</li>
            </ul>
        </div>

        <div class="skills__box">
            <ul>
                <li class="skills__img"> <img src="img/git_icon.png" alt=""/> </li>
                <li class="skills__name">Git</li>
            </ul>
        </div>

        <div class="skills__box">
            <ul>
                <li class="skills__img"> <img src="img/sql_icon.png" alt=""/> </li>
                <li class="skills__name">SQL</li>
            </ul>
        </div>
    </div>
</section>

}

export default Skills;