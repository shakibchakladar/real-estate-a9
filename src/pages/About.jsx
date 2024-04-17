import 'animate.css';

const About = () => {
    return (
  <div className="pt-36">
          <div className="min-h-[300px] hero animate__flash" style={{backgroundImage: 'url(https://i.ibb.co/drDYM08/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="text-center hero-content text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">About us </h1>
      {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>

<div className="flex gap-5 px-5 mt-10 animate__flash animate__animated animate__bounce">
    <div className="w-1/2"><img src="https://i.ibb.co/drDYM08/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg" alt="" /></div>
    <div className="w-1/2">
        <div className="h-96 bg-base-200 p-7">
  <div className="text-center hero-content">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Experience since 1999</h1>
      <p className="py-6">We have been working since 1999 to be sure you are getting the best MyHome service possible.

MyHome aims to unite MyHome brokers to provide their clients and partners with the top-notch level of brokerage services throughout the USA.</p>
      <button className="justify-start -m-12 btn">Get In Touch</button>
    </div>
  </div>
</div></div>
</div>

<div className="flex flex-col justify-around gap-3 p-10 m-5 md:flex-row">
<div className="max-w-xs p-10 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 ">
	<img src="https://i.ibb.co/hB71HY3/download.png" alt="" className="object-cover object-center w-full p-5 rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		{/* <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span> */}
		<h2 className="text-xl font-semibold tracking-wide">Various Locations</h2>
	</div>
	<p className="dark:text-gray-800">We have lots of properties in various locations available for purchase.</p>
</div>
<div className="max-w-xs p-10 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
	<img src="https://i.ibb.co/hB71HY3/download.png" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		{/* <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span> */}
		<h2 className="text-xl font-semibold tracking-wide">No Commission</h2>
	</div>
	<p className="dark:text-gray-800">Opportunity to acquire a quality apartment for rent without having to pay any commission.</p>
</div>
<div className="max-w-xs p-10 rounded-md shadow-md ">
	<img src="https://i.ibb.co/Bc0fxz7/1024px-Search-Icon-svg.png" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		{/* <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span> */}
		<h2 className="text-xl font-semibold tracking-wide">View Apartments
</h2>
	</div>
	<p className="dark:text-gray-800">View apartment listings with photos, HD videos, virtual tours, 3D floor plans etc.</p>
</div>



</div>
  </div>

    );
};

export default About;