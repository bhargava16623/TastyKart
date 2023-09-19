

const Section = ({title,description})=>{
  return (
  <div className="border-2 border-black p-2 m-6">
    <h2 className="text-2xl">{title}</h2>
    <h2 className="text-xl">{description}</h2>
  </div>
  )
}



const About =()=>{
    return(
         <div>
           <Section title={"Mission Statement"} description={"At TastyKart, our mission is simple yet profound: to delight taste buds and simplify lives. We're committed to bringing you the world's flavors on a plate, delivering joy, one meal at a time. We believe that great food should be within everyone's reach, and we're dedicated to connecting you with exceptional cuisine from local eateries. Our goal is to make dining an experience, not just a task, by offering convenience, variety, and exceptional service right to your doorstep."}/>
           <Section title={"Our Story"} description={"TastyKart was born out of a passion for good food and a desire to bridge the gap between your cravings and culinary delights. Founded by [Founder's Name], a food enthusiast and tech visionary, our journey began with a simple idea: to make ordering food as effortless and enjoyable as eating it. From humble beginnings to a trusted food delivery platform, our story is one of innovation, dedication, and a deep appreciation for the culinary world."}/>
           <Section title={"User Benefits"} description={"Indulge in a world of culinary convenience with TastyKart. We offer a variety of benefits designed to elevate your dining experience. From the ease of ordering your favorite dishes with a few taps on our user-friendly app to the assurance of speedy, reliable deliveries that bring hot, fresh meals right to your doorstep. Unlock exclusive deals and promotions from our partner restaurants, ensuring that every bite is a delightful experience, made even better with our customizable options. Your safety is paramount; our robust security measures protect your transactions and personal information. Join our lively community of foodies, where you can share recommendations, reviews, and culinary adventures. Plus, with every order, you're not just enjoying great food – you're supporting local businesses and fostering a sense of togetherness within your community. Welcome to a world where every meal is an occasion, and every taste is an adventure."}/>
           <Section title={"Our Story"} description={"TastyKart was born out of a passion for good food and a desire to bridge the gap between your cravings and culinary delights. Founded by [Founder's Name], a food enthusiast and tech visionary, our journey began with a simple idea: to make ordering food as effortless and enjoyable as eating it. From humble beginnings to a trusted food delivery platform, our story is one of innovation, dedication, and a deep appreciation for the culinary world."}/>
         </div>
    );
}
export default About;