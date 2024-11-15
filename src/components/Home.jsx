import * as React from "react";
import drimage from "../assets/drImage.jpg"
import introimage from "../assets/intro-image.jpg"

import { useState } from "react";
import Slider from "react-slick";
// import { FaRegCircleUser } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";





function Home() {

  const testimonials = [
    {
      text: "The child wellness center has made a huge impact on our family. My son Alex is thriving and so much happier!",
      name: "Sarah, Mother of Alex",
      role: "Parent",
      image: "https://img.freepik.com/free-vector/minimalist-geometric-judith-s-tiktok-profile-picture_742173-12131.jpg?uid=R167873225&ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", // Replace with a real image URL
    },
    {
      text: "I feel so reassured knowing that my daughter is in the best hands at this wellness center. Highly recommend!",
      name: "Emily, Mother of Mia",
      role: "Parent",
      image: "https://img.freepik.com/free-vector/tiktok-profile-picture-template_742173-4482.jpg?uid=R167873225&ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", // Replace with a real image URL
    },
    {
      text: "The team at the wellness center is incredibly kind and supportive. My son is finally gaining the confidence he needed!",
      name: "Michael, Father of Ethan",
      role: "Parent",
      image: "https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?uid=R167873225&ga=GA1.1.1184448983.1726315349&semt=ais_hybrid", // Replace with a real image URL
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const scrollToVideoSection = () => {
    const videoSection = document.getElementById('video-section');
    videoSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const scrollToProgramSection = () => {
    const videoSection = document.getElementById('program-section');
    videoSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
    // You can handle form submission here (e.g., send data to server)
    console.log(formData);
  };


  return (
    <div className="flex pt-20 overflow-hidden flex-col">
     
      <div className="z-10 px-16 py-28 mt-0 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b5c5d5a614dd6b0571966849fc339509d6e37c3b875afbee58908be67620a448?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c5d5a614dd6b0571966849fc339509d6e37c3b875afbee58908be67620a448?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c5d5a614dd6b0571966849fc339509d6e37c3b875afbee58908be67620a448?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c5d5a614dd6b0571966849fc339509d6e37c3b875afbee58908be67620a448?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c5d5a614dd6b0571966849fc339509d6e37c3b875afbee58908be67620a448?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c5d5a614dd6b0571966849fc339509d6e37c3b875afbee58908be67620a448?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c5d5a614dd6b0571966849fc339509d6e37c3b875afbee58908be67620a448?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b5c5d5a614dd6b0571966849fc339509d6e37c3b875afbee58908be67620a448?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22"
              className="object-contain grow self-center w-full aspect-[1.33] max-w-[851px] max-md:mt-10 max-md:max-w-full max-sm:-mt-1 max-sm:w-[361px]"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start   my-auto mr-0 font-medium max-md:mt-10 max-md:max-w-full">
              <div className=" text-8xl  text-black max-md:max-w-full max-md:text-4xl max-sm:text-7xl max-sm:text-center max-sm:text-green-600">
                <span className="font-bold tracking-tight text-zinc-800">Nurturing</span>{" "}
                <span class="text-transparent tracking-tight font-bold bg-clip-text bg-gradient-to-r from-green-400 to-green-800">
  Growth
</span>
              </div>
              <div className="mt-4 text-2xl text-center text-zinc-500 max-md:mt-10 max-md:max-w-full">
                Holistic child wellness programs designed for a brighter future
              </div>
              <div className="flex justify-center max-sm:w-full">

        <a href="javascript:void(0)" onClick={scrollToVideoSection}>
          <div className="py-2 mt-4  text-white -mr-px text-2xl hover:bg-blue-700 bg-gradient-to-r from-[#608DFF] to-[#042066] font-medium text-center h-[55px] rounded-2xl w-[300px] max-md:px-5 max-md:max-w-full max-sm:mx-auto max-sm:mb-2.5 max-sm:text-2xl max-sm:bg-blue-600 max-sm:h-[60px] max-sm:w-[310px]">
            <h3>Watch How We Care</h3>
          </div>
        </a>
              </div>
     
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center mt-24 w-full max-w-[1796px] max-md:mt-10 max-md:max-w-full">
        <div className="self-center text-4xl font-semibold text-center text-zinc-800 max-md:max-w-full max-md:text-3xl">
          <p>Welcome to</p>
        </div>
        <div className="self-center bg-gradient-to-r from-green-400 to-green-900 text-transparent bg-clip-text px-2 mt-2 text-8xl font-bold tracking-tight text-center max-md:max-w-full max-md:text-5xl">
          Global Child Wellness Centre
        </div>
        <div className="mt-6 text-2xl max-md:mx-4 max-md:text-xl text-center text-zinc-500 max-md:max-w-full">
          Caring for your child's well-being with compassion and expertise.
        </div>
        <div className="self-start mt-12 ml-10 w-full max-w-[1619px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5  max-md:flex-col">
            <div className="flex flex-col w-6/12    max-sm:w-3/4">
              <div className="flex flex-col  text-2xl  max-md:mt-10 max-md:max-w-full">
                <div className="text-zinc-700 text-justify max-md:max-w-full   max-sm:ml-4 max-sm:text-lg">
                  Ludhiana's very own multidisciplinary Child and Adolescent
                  Mental Health service where trained professionals including
                  Child Psychiatrists, Psychologists, Speech therapists, Special
                  educators, Occupational Therapists and Counsellors Work in
                  Harmony with children, parents and caregivers including
                  teachers with a dedicated focus on improved outcomes in mental
                  health and well being.
                </div>
                {/* <div className="flex flex-col pb-3.5 mt-14 max-w-full text-white rounded-3xl h-[75px] bg-blue-400 bg-opacity-40 w-[350px] max-md:mt-10 max-sm:mx-auto max-sm:bg-blue-400 max-sm:h-[73px]"> */}
        <a href="javascript:void(0)" onClick={scrollToProgramSection}>
          <div className="px-8 py-4 mt-10 text-white -mr-px text-2xl hover:bg-blue-700  bg-gradient-to-r from-[#608DFF] to-[#042066] font-medium text-center h-[70px] rounded-2xl w-[350px] max-md:px-5 max-md:max-w-full max-sm:mx-auto max-sm:mb-2.5 max-sm:text-2xl max-sm:bg-blue-600 max-sm:h-[60px] max-sm:w-[310px]">
            <h3>Explore Our Programs</h3>
          </div>
        </a>
      {/* </div> */}

              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={introimage}
                className="object-contain grow w-full rounded-xl aspect-[1.56] max-md:mt-10 max-md:max-w-full max-sm:hidden"
              />
            </div>
          </div>
        </div>
        <div id="video-section" className="mt-20 mb-10  text-8xl font-bold tracking-tighter text-center max-md:mt-10 max-md:max-w-full max-md:text-4xl max-sm:pl-4 max-sm:text-6xl">
        <h4>How we <span className="bg-gradient-to-r from-green-400 to-green-900 text-transparent bg-clip-text px-2">Care</span></h4>
        
      </div>
      <h2 className="text-lg text-justify px-10 md:text-2xl text-zinc-500">The Featured Video highlights how the center cares for children by offering a range of services, ensuring their safety, well-being, and growth.</h2>
      <div className="relative w-full px-4 sm:px-8 md:px-12 lg:px-16 scale-75 pb-[56.25%] rounded-xl overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/Reum1zz-EFg"
          title="Therapies for children at Global Child Wellness Centre"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* See More Videos Button */}
      {/* <div className="flex flex-col pb-3.5 max-w-full text-white rounded-3xl h-[75px] bg-blue-400 bg-opacity-40 w-[350px] max-md:mt-10 max-sm:mx-auto max-sm:bg-blue-400 max-sm:h-[73px]"> */}
  <a href="https://www.youtube.com/@globalchildwellnesscentre7055" target="_blank" rel="noopener noreferrer">
    <div className="px-4 py-4 -mr-px text-2xl text-white     bg-gradient-to-r from-[#608DFF] to-[#042066] font-medium text-center h-[70px] rounded-2xl w-[350px] max-md:px-5 max-md:max-w-full max-sm:mx-auto max-sm:mb-2.5 max-sm:text-2xl max-sm:bg-blue-500 max-sm:h-[60px] max-sm:w-[310px] hover:bg-blue-700 transition duration-300 ease-in-out">
      <h3>See More Videos</h3>
    </div>
  </a>
{/* </div> */}

<div className="self-start mt-20 mx-auto w-full max-w-[1454px]">
  <div className="flex gap-5 flex-col md:flex-row">
  <div className="  text-4xl md:text-start bg-gradient-to-r md:hidden from-green-400 to-green-800 text-transparent bg-clip-text px-2 tracking-tighter text-center md:text-5xl">
          Meet
        </div>
        <div className="text-6xl font-bold tracking-tight text-center md:hidden text-neutral-700 md:text-start  md:text-8xl">
          Dr. Priyanka Kalra
        </div>
    <div className="flex flex-col justify-center w-full md:w-[31%]">
      <div className="flex mx-10 md:mx-0 flex-col grow text-xl font-semibold text-center text-zinc-700 mt-10 md:mt-0">
        <img
          loading="lazy"
          src={drimage}
          className="r w-full rounded-md   "
        />
      </div>
    </div>
    <div className="flex flex-col w-full md:w-[69%]">
      <div className="flex flex-col text-center font-semibold mt-10 md:mt-0">
        <div className="  text-4xl md:text-start bg-gradient-to-r max-sm:hidden from-green-400 to-green-800 text-transparent bg-clip-text px-2 tracking-tighter text-center md:text-5xl">
          Meet
        </div>
        <div className="text-6xl font-bold tracking-tight max-sm:hidden text-neutral-700 md:text-start  md:text-8xl">
          Dr. Priyanka Kalra
        </div>
        <div className="mt-10 text-xl max-sm:mt-0  font-medium text-justify tracking-tight text-zinc-500 max-w-full mx-10 md:text-xl md:mx-10">
          Dr. Priyanka Kalra is a distinguished Consultant Psychiatrist
          and a valued member of the Indian Association of Child and
          Adolescent Psychiatry. Her expertise lies in Child and
          Adolescent Psychiatry, and she is the best Psychiatrist in
          Ludhiana. She is dedicated to providing comprehensive
          treatment to her patients. Dr. Priyanka's approach integrates
          medication with counseling, ensuring holistic care. She
          employs various therapeutic methods, including behavior
          therapy, cognitive behavior therapy, and family therapy, to
          address the unique needs of each patient.
        </div>
      </div>
    </div>
  </div>
</div>
        <div className="flex flex-col grow mx-auto mt-10 font-medium text-center max-md:mt-10 max-md:max-w-full max-sm:mx-auto max-sm:text-center">
          <div id="program-section" className="self-center text-8xl tracking-tighter text-black max-md:max-w-full max-md:text-4xl max-sm:self-center max-sm:text-6xl max-sm:text-center max-sm:w-[322px]">
            <span className="text-8xl font-bold tracking-tight text-zinc-900">
              {/* <span className="text-5xl"></span> */}
              <span className="self-center text-6xl text-center">
                Our Wellness
              </span>
            </span>{" "}
            <span className="self-center bg-gradient-to-r from-green-400 to-green-800 text-transparent bg-clip-text  pr-1 font-bold text-center">Programs</span>
          </div>
          <div className="mt-10 text-xl md:text-2xl tracking-tight text-center text-zinc-500 w-[1591px] max-md:mt-10 max-md:max-w-full max-sm:mx-auto max-sm:text-left max-sm:w-[313px]">
            At Global Wellness Centre, we offer a variety of programs designed
            to support your child’s physical, emotional, and cognitive growth.
            Our services focus on building a strong foundation for lifelong
            well-being.
          </div>
        </div>
        <div className="mt-20 w-full max-w-[1390px] max-md:mt-10 max-md:max-w-full max-sm:flex max-sm:flex-col">
          <div className="flex gap-5 justify-center max-md:flex-col">
            <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-2.5 pb-20 w-full text-xl bg-red-200 rounded-2xl  border-opacity-10 max-md:mt-10 max-sm:hidden">
                <img
                  loading="lazy"
                  srcSet="https://img.freepik.com/free-photo/woman-doing-speech-therapy-with-little-blonde-boy_23-2149110233.jpg?t=st=1731647590~exp=1731651190~hmac=3fae8812cd2efa6a61f0cb48cd894edd46c091eb8238773b755a8418017c6e6e&w=1380"
                  // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22"
                  className="object-cover mx-2.5 rounded-xl  aspect-[1.41] max-md:mx-2.5"
                />
                <div className="px-16 pt-0.5 pb-3 mt-3.5 text-center text-xl font-bold tracking-wide text-white bg-red-500  max-md:px-5">
                  Speech Therapy
                </div>
                <div className="mt-6 mr-6 ml-6 text-justify font-medium tracking-tighter text-black text-opacity-80 max-md:mx-2.5">
                  Program Description this is where the services/programs
                  description will be written .
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-2.5 pb-20 w-full text-xl bg-blue-200 rounded-2xl  max-md:mt-10 max-sm:hidden">
                <img
                  loading="lazy"
                  srcSet="https://img.freepik.com/free-photo/close-up-boy-playing-with-legos_23-2150814435.jpg?t=st=1731647772~exp=1731651372~hmac=4083db4daa64efcd50119ccb19fc6871397114d4084e2a0b6cadfae73ad8531f&w=1380"
                  // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22"
                  className="object-cover mx-2.5 rounded-xl  aspect-[1.41] max-md:mx-2.5"
                />
                <div className="px-16 pt-0.5 pb-3 mt-3.5 text-center text-xl font-semibold tracking-tight text-white bg-blue-500 max-md:px-5">
                  Psychological Assessment
                </div>
                <div className="mt-6 mr-6 ml-6 font-medium text-justify tracking-tighter text-black text-opacity-80 max-md:mx-2.5">
                  Program Description this is where the services/programs
                  description will be written .
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-2.5 pb-20 w-full text-xl bg-orange-200 rounded-2xl max-md:mt-10 max-sm:mx-auto max-sm:w-4/5">
                <img
                  loading="lazy"
                  srcSet="https://img.freepik.com/premium-photo/mother-child-having-fun_23-2149404157.jpg?ga=GA1.1.1355882443.1727783639&semt=ais_hybrid"
                  // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22"
                  className="object-cover mx-2.5 rounded-xl  aspect-[1.41] max-md:mx-2.5"
                />
                <div className="px-16 pt-0.5 pb-3 mt-3.5 text-center text-xl font-semibold tracking-tight text-white bg-orange-500  max-md:px-5">
                  Early Intervention
                </div>
                <div className="mt-6 mr-6 ml-6 font-medium text-justify tracking-tighter text-black text-opacity-80 max-md:mx-2.5">
                  Program Description this is where the services/programs
                  description will be written .
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 w-full max-w-[1390px] max-md:mt-10 max-md:max-w-full max-sm:flex max-sm:flex-col">
          <div className="flex gap-5 justify-center max-md:flex-col">
            <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-2.5 pb-20 w-full text-xl bg-orange-200 rounded-2xl max-md:mt-10 max-sm:mx-auto max-sm:w-4/5">
                <img
                  loading="lazy"
                  srcSet="https://img.freepik.com/free-photo/portrait-young-boy_23-2150773172.jpg?t=st=1731648008~exp=1731651608~hmac=60e2acd30f8f4cbd35fd0cf37674924718a03ac518d5b51434434bfb0530256d&w=1380"
                  // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d2c848323641717c262a27529a5ba212469c57baf078f7a000f795a70eb65ad5?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22"
                  className="object-cover mx-2.5 rounded-xl  aspect-[1.41] max-md:mx-2.5"
                />
                <div className="px-16 pt-0.5 pb-3 mt-3.5 text-center text-xl font-semibold tracking-tight text-white bg-orange-500  max-md:px-5">
                  Special Education
                </div>
                <div className="mt-6 mr-6 ml-6 font-medium text-justify tracking-tighter text-black text-opacity-80 max-md:mx-2.5 max-sm:mx-auto max-sm:w-64">
                  Program Description this is where the services/programs
                  description will be written .
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-2.5 pb-20 w-full text-xl bg-blue-200 rounded-2xl  max-md:mt-10 max-sm:mx-auto max-sm:w-4/5">
                <img
                  loading="lazy"
                  srcSet="https://img.freepik.com/free-photo/business-people-working-data-project_53876-41687.jpg?t=st=1731648103~exp=1731651703~hmac=1730970861e423f82df971a34804e457da2cc4004675052f2027590ee66447e8&w=1380"
                  // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22"
                  className="object-cover pt-2 mx-2.5 rounded-xl  aspect-[1.41] max-md:mx-2.5"
                />
                <div className="px-16 pt-0.5 pb-3 mt-3.5 text-center text-xl font-semibold tracking-tight text-white bg-blue-500 border border-solid border-black border-opacity-10 max-md:px-5 max-sm:pt-1.5">
                  NRI Services
                </div>
                <div className="mt-6 mr-6 ml-6 font-medium text-justify tracking-tighter text-black text-opacity-80 max-md:mx-2.5 max-sm:mx-auto max-sm:w-64">
                  Program Description this is where the services/programs
                  description will be written .
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-2.5 pb-20 w-full text-xl bg-red-200 rounded-2xl   max-md:mt-10 max-sm:hidden max-sm:mx-auto max-sm:w-4/5">
                <img
                  loading="lazy"
                  srcSet="https://img.freepik.com/premium-photo/mother-little-girl-daughter-playing-with-jewelry-while-staying-home-coronavirus-quarantine_530697-79015.jpg?ga=GA1.1.1355882443.1727783639&semt=ais_hybrid"
                  // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/52c5defa412c109f272f3654f942f9654fc1bc4e7c27f57349a2e6bdd0a2444a?placeholderIfAbsent=true&apiKey=62758e6c51124168b752b9b25726be22"
                  className="object-cover mx-2.5 rounded-xl  aspect-[1.41] max-md:mx-2.5"
                />
                <div className="px-16 pt-0.5 pb-3 mt-3.5 text-center text-xl font-semibold tracking-tight text-white bg-red-500 border border-solid border-black border-opacity-10 max-md:px-5 max-sm:pt-2">
                  Our Station Services
                </div>
                <div className="mt-6 mr-6 ml-6 font-medium text-justify tracking-tighter text-black text-opacity-80 max-md:mx-2.5 max-sm:mx-auto max-sm:w-64 max-sm:text-left">
                  Program Description this is where the services/programs
                  description will be written .
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 text-8xl font-medium tracking-tight text-center text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl max-sm:text-5xl">
          <span className="font-bold text-neutral-800">Our Latest </span>
          <span className="font-bold bg-gradient-to-r from-green-400 to-green-800 text-transparent bg-clip-text">Video</span>
        </div>
        <div className="mx-auto mt-4 text-xl md:text-2xl text-justify font-medium  text-black text-opacity-80 max-md:max-w-full max-sm:w-[340px]">
          Watch as our little learners dive into hands-on science experiments
          and creative arts projects this week
        </div>
        

        <div className="relative w-full px-4 sm:px-8 md:px-12 lg:px-16 scale-75 pb-[56.25%] rounded-xl overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/krs2561-Pdg"
          title="Therapies for children at Global Child Wellness Centre"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

        
        <div className="mt-10 text-white ">
  <a 
    href="https://www.youtube.com/@globalchildwellnesscentre7055" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <div className=" py-4 text-lg sm:text-2xl  bg-gradient-to-r from-[#608DFF] to-[#042066] px-10 font-medium text-center rounded-2xl w-full hover:bg-blue-700 transition duration-300 ease-in-out">
      <h3>See More Videos</h3>
    </div>
  </a>
</div>
      </div>


    


      <div className="self-center mt-32 w-full max-w-[1591px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center text-center gap-5">
        <div className="text-4xl md:text-8xl font-bold tracking-tight mb-10">
          Trusted by Parents
          <br />
          Lo<span className="text-green-600">✔</span>ed by Children
        </div>
        <Slider {...settings} className="w-full max-w-[805.5px] max-md:max-w-full px-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center py-4 px-10 bg-white rounded-lg ">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}`}
                className="rounded-full w-16 h-16 object-cover mb-4"
              />
              
              <div className="flex items-center gap-3">
                {/* <FaUserCircle className="text-2xl text-neutral-500" /> */}
                <div className="text-center">
                  <div className="font-bold text-left text-stone-900">{testimonial.name}</div>
                  <div className="text-neutral-600 text-left">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-lg mt-4 font-semibold text-left text-neutral-700 mb-3">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>


<div className="my-28 flex   justify-center items-center mx-10 bg-white">
      <div className="max-w-md w-full p-6 bg-zinc-300 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-500 text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter your name "
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border bg-zinc-100 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border bg-zinc-100 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Contact No.</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="enter your Contact number here "
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border bg-zinc-100 border-gray-500 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Ask Anything, we love replying!!"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border bg-zinc-100 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>


    
    <div className="overflow-hidden flex flex-col  items-center rounded-lg">
  <h2 className="text-3xl font-bold pb-10">Location</h2>
  <div className="relative w-full max-w-xl" style={{ paddingTop: "56.25%" }}> {/* 16:9 Aspect Ratio */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13694.947329945437!2d75.8198879!3d30.8940222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83ce6b2e77d3%3A0xaff35de0b11471c4!2sGLOBAL%20CHILD%20WELLNESS%20CENTRE!5e0!3m2!1sen!2sin!4v1731579297698!5m2!1sen!2sin"
      className="absolute top-0 left-0 w-full h-full rounded-lg"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>

      <div className="mt-16 w-full  min-h-[1px] max-md:mt-10 max-md:max-w-full" />
      
    </div>

  );
}


export default Home