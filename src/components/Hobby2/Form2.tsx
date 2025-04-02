export default function Form2() {
    return (
        <form>
            <label htmlFor="fullname">Enter Your Full Name: </label>
            <input type="text" id="fullname"/>
            <br/>
            <br/>
            <label htmlFor="email">Enter Your Email: </label>
            <input type="text" id="email"/>
            <br/>

            <p>Do you like the following genres?</p>
            <input type="checkbox" id="comedy"/>
            <label htmlFor="comedy">comedy</label>
            <br/>
            <input type="checkbox" id="drama"/>
            <label htmlFor="drama">drama</label>
            <br/>
            <input type="checkbox" id="romance"/>
            <label htmlFor="romance">romance</label>
            <br/>
            <input type="checkbox" id="horror"/>
            <label htmlFor="horror">horror</label>
            <br/>
            <input type="checkbox" id="action"/>
            <label htmlFor="action">action</label>
            <br/>
            <input type="checkbox" id="documentary"/>
            <label htmlFor="documentary">documentary</label>
            <br/>
            <br/>

            <p>Choose your favorite place to watch a movie:</p>
            <input type="radio" id="movietheater" name="favoriteplace" value="movietheater"/>
            <label htmlFor="movietheater">movie theater</label>
            <br/>
            <input type="radio" id="athome" name="favoriteplace" value="athome"/>
            <label htmlFor="athome">at home</label>
            <br/>
            <input type="radio" id="drivetheater" name="favoriteplace" value="drivetheater"/>
            <label htmlFor="drivetheater">drive-in theater</label>
            <br/>
            <input type="radio" id="friends" name="favoriteplace" value="friends"/>
            <label htmlFor="friends">friend's house</label>
            <br/>
            <br/>
            <br/>

            <label htmlFor="favoritemovie">Whats your favorite movie and why? </label><br/>
            <textarea id="favoritemovie" name="favoritemovie" rows={4} cols={50}></textarea>
            <br/>
            <br/>

            <label htmlFor="streamingservice">Choose your favorite streaming service: </label><br/>
            <select id="streamingservice" name="streamingservice">
                <option value="netflix">Netflix</option>
                <option value="max">Max</option>
                <option value="hulu">Hulu</option>
                <option value="disney">Disney</option>
                <option value="youtube">Youtube</option>
                <option value="tubi">Tubi</option>
                <option value="prime">Prime</option>
                <option value="peacock">Peacock</option>
            </select>
            <br/>
            <br/>
            <br/>

            <input type="submit" value="Submit"/>
        </form>
    )
}