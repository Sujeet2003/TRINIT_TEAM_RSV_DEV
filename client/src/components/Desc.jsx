import Card from "../components/Card"

const Desc = () => {
  return (
    <div className="h-[40vh]">
      <div className="m-4 text-xl">Welcome to [Your App Name], the ultimate test generator designed to simplify the process of creating and taking assessments. Whether you're an educator, trainer, or simply someone looking to evaluate knowledge, our user-friendly platform empowers you to craft customized tests effortlessly. Say goodbye to manual question creation and embrace a seamless, efficient testing experience with our comprehensive test generator.</div>
        <div className="cardHolder flex gap-4 m-4">
            <Card>
                <p><h1>Generate:</h1> Create and customize tests with ease, using our intuitive test generator to craft questions, set time limits, and more.</p>
            </Card>
            <Card>
                <p><h1>Instant Grading and Analysis:</h1> Receive immediate results with detailed insights into your performance, helping you understand your strengths and weaknesses.</p>
            </Card>
            <Card>
                <p><h1>Customized Test Creation:</h1> Upload past JEE question papers or sample tests in PDF format and watch as our advanced OCR technology converts them into interactive online tests.</p>
            </Card>
            <Card>
                <p><h1>Interactive Learning Experience:</h1> Engage with each question through a dynamic interface that simulates the real JEE testing environment</p>
            </Card>
        </div>        
    </div>
  )
}

export default Desc
