
export default function Form1() {
    return <form>
        <label className="bold" htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <br />
        <br />
        <label className="bold" htmlFor="message">Your message:</label>
        <input type="text" id="message" />
        <br />
        <br />
        <b>Tell me about you. Do you like...</b>
        <br />
        <input type="checkbox" id="continental" />
        <label htmlFor="continental">Continental philosophy?</label>
        <input type="checkbox" id="programming" />
        <label htmlFor="programming">Programming?</label>
        <input type="checkbox" id="writing" />
        <label htmlFor="writing">Creative writing?</label>
        <br />
        <br />
        <b>You are contacting me to...</b>
        <br />
        <input type="radio" id="converse" name="contact" value="converse" />
        <label htmlFor="converse">Spark a conversation</label><br />
        <input type="radio" id="ask" name="contact" value="ask" />
        <label htmlFor="ask">Ask a question</label><br />
        <input type="radio" id="other" name="contact" value="other" />
        <label htmlFor="other">Some other reason</label><br />
        <br />
        <label className="bold" htmlFor="ps">P.S.</label>
        <input type="text" id="ps" />
        <br />
        <br />
        <label className="bold" htmlFor="preference">I prefer...</label>
        <input id="preference" list="preferences" name="preference" />
        <datalist id="preferences">
            <option value="Dogs" />
            <option value="Cats" />
            <option value="Spiders" />
            <option value="None are good" />
        </datalist>
        <br />
        <br />
        <button>Submit</button>
    </form>
}