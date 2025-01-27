import Image from "next/image";
import Link from "next/link";
import { getCityFilter } from "./lib/data";
import Navbar from "../components/navbar";
import CompanyLogos from "../components/company-logos";

export default async function Home() {
  const filter = await getCityFilter();

  console.log(filter);

  return (
    <>
      <section
        id="Header"
        className="relative bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top"
      >
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)]">
          <Navbar />
          <div className="hero-section container max-w-[1130px] w-full mx-auto flex flex-col gap-[90px] mt-[103px]">
            <div className="title flex flex-col gap-[30px]">
              <h1 className="font-extrabold text-[80px] leading-[90px]">
                Best Flights. <br />
                Cheaper Budget.
              </h1>
              <p className="font-medium text-lg leading-[36px]">
                No more long queue, get more delicious heavy meals. <br />
                Crafted by best talented people around the world.
              </p>
            </div>
            <form className="bg-white text-flysha-black w-full flex justify-between items-center rounded-[20px] p-5">
              <div className="flex gap-[50px] items-center p-5">
                <div className="flex flex-col justify-center gap-[14px]">
                  <label htmlFor="departure" className="text-lg">
                    Departure
                  </label>
                  <div className="flex gap-[10px]">
                    <div className="flex items-center w-8 h-8 shrink-0">
                      <Image
                        width={150}
                        height={60}
                        src="/assets/images/icons/airplane.svg"
                        alt="icon"
                      />
                    </div>
                    <select
                      name="departure"
                      id="departure"
                      className="font-semibold text-[22px] leading-[26.63px] appearance-none bg-[url(/assets/images/icons/arrow-down.svg)] bg-no-repeat bg-[right_1px] pr-[30px]"
                    >
                      {/* perbaiki bagian filter ini */}
                      <option value="" disabled selected>
                        Departure
                      </option>
                      {filter?.map((val, key) => (
                        <option
                          key={`${key} ${val.departureCity}`}
                          value={val.departureCity}
                        >
                          {val.departureCity}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <hr className="border border-[#EDE8F5] h-[60px]" />
                <div className="flex flex-col justify-center gap-[14px]">
                  <label htmlFor="arrival" className="text-lg">
                    Arrival
                  </label>
                  <div className="flex gap-[10px]">
                    <div className="flex items-center w-8 h-8 shrink-0">
                      <Image
                        width={150}
                        height={60}
                        src="/assets/images/icons/airplane.svg"
                        alt="icon"
                      />
                    </div>
                    <select
                      name="arrival"
                      id="arrival"
                      className="font-semibold text-[22px] leading-[26.63px] appearance-none bg-[url(/assets/images/icons/arrow-down.svg)] bg-no-repeat bg-[right_1px] pr-[30px]"
                    >
                    <option value="" disabled selected>
                        Arrival
                      </option>
                      {filter?.map((val, key) => (
                        <option
                          key={`${key} ${val.destinationCity}`}
                          value={val.destinationCity}
                        >
                          {val.destinationCity}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <hr className="border border-[#EDE8F5] h-[60px]" />
                <div className="flex flex-col justify-center gap-[14px]">
                  <label htmlFor="date" className="text-lg">
                    Departure Date
                  </label>
                  <div className="flex gap-[10px]">
                    <div className="flex items-center w-8 h-8 shrink-0">
                      <Image
                        width={150}
                        height={60}
                        src="/assets/images/icons/calendar.svg"
                        alt="icon"
                      />
                    </div>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="relative font-semibold text-[22px] leading-[26.63px] w-[157px] bg-transparent focus:outline-none appearance-none [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0"
                    />
                  </div>
                </div>
              </div>
              <Link
                href="signup.html"
                className="font-bold text-2xl leading-9 text-flysha-black text-center bg-flysha-light-purple rounded-[18px] p-[12px_30px] flex shrink-0 items-center h-[108px]  transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
              >
                Explore Now
              </Link>
            </form>
          </div>
          <CompanyLogos />
        </div>
      </section>

      <section
        id="Services"
        className="container max-w-[1130px] mx-auto flex flex-col pt-[100px] gap-[30px]"
      >
        <h2 className="font-bold text-[32px] leading-[48px] text-center">
          We Ensure You <br />
          Fly With Us Forever
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[30px] w-[225px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                height={30}
                width={30}
                src="/assets/images/icons/profile-2user.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">Talented Crew</p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[225px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                height={30}
                width={30}
                src="/assets/images/icons/shield-tick.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">Safe Guard</p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[225px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                height={30}
                width={30}
                src="/assets/images/icons/crown.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">Best Awards</p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-[225px]">
            <div className="flex shrink-0 w-[70px] h-[70px] rounded-full items-center justify-center bg-flysha-light-purple">
              <Image
                height={30}
                width={30}
                src="/assets/images/icons/building-3.svg"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-2xl leading-[36px]">
                Pickup at Home
              </p>
              <p className="leading-[30px] text-flysha-off-purple">
                Our jets protected by metal that can’t be destroyed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Selected"
        className="container max-w-[1130px] mx-auto flex flex-col pt-[100px] gap-[30px]"
      >
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[32px] leading-[48px] text-center">
            Best Selective
          </h2>
          <div className="flex gap-[10px]">
            <button className="flex shrink-0 w-10 h-10 items-center justify-center bg-white rounded-full">
              <Image
                height={30}
                width={30}
                src="/assets/images/icons/arrow-right.svg"
                className="rotate-180"
                alt="icon"
              />
            </button>
            <button className="flex shrink-0 w-10 h-10 items-center justify-center bg-white rounded-full">
              <Image
                height={30}
                width={30}
                src="/assets/images/icons/arrow-right.svg"
                alt="icon"
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[30px]">
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                height={30}
                width={30}
                src="/assets/images/thumbnail/thumbnail1.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  height={30}
                  width={30}
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">First Lounge</p>
                <p className="text-flysha-off-purple">Manhanggattan</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                height={30}
                width={30}
                src="/assets/images/thumbnail/thumbnail2.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  height={30}
                  width={30}
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">Business First</p>
                <p className="text-flysha-off-purple">Gulfstream 109-BB</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                height={30}
                width={30}
                src="/assets/images/thumbnail/thumbnail3.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  height={30}
                  width={30}
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">Pickup at Home</p>
                <p className="text-flysha-off-purple">Bentley Banta</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="rounded-[30px] h-[310px] overflow-hidden">
              <Image
                height={30}
                width={30}
                src="/assets/images/thumbnail/thumbnail4.png"
                className="w-full h-[310px] object-cover"
                alt="thumbnail"
              />
            </div>
            <div className="flex gap-[14px] items-center">
              <div className="flex shrink-0 w-8 h-8">
                <Image
                  height={30}
                  width={30}
                  src="/assets/images/icons/crown-white.svg"
                  className="w-8 h-8"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg">Fly Roam</p>
                <p className="text-flysha-off-purple">Capung A19-22</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Testimonials"
        className="w-full flex flex-col pt-[100px] gap-[30px]"
      >
        <div className="flex flex-col gap-[6px] items-center">
          <h2 className="font-bold text-[32px] leading-[48px] text-center">
            Best Selective
          </h2>
          <p className="font-medium text-flysha-off-purple">
            We gave them all the best experiences ever
          </p>
        </div>
        <div className="testimonial-slider w-full overflow-hidden">
          <div className="slider flex shrink-0 w-max">
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      height={30}
                      width={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      height={30}
                      width={30}
                      src="/assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="/assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      height={30}
                      width={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      height={30}
                      width={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      height={30}
                      width={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      height={30}
                      width={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      height={30}
                      width={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      height={30}
                      width={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]">
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      height={30}
                      width={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      height={30}
                      width={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      height={30}
                      width={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
              <div className="testi-cards flex flex-col gap-[14px] h-full w-fit bg-flysha-bg-purple p-5 rounded-[20px] overflow-hidden">
                <p className="review leading-[30px] h-[90px] w-[305px]">
                  I thought cheaper was not good, well, I personally never had
                  this amazing experience. Thank you!!
                </p>
                <div className="flex">
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                  <Image
                    height={30}
                    width={30}
                    src="../assets/images/icons/Star.svg"
                    className="w-5 h-5"
                    alt="star"
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex shrink-0 rounded-full w-[50px] h-[50px] overflow-hidden">
                    <Image
                      height={30}
                      width={30}
                      src="../assets/images/photos/Group 47.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Jessi Lyio</p>
                    <p className="text-sm text-flysha-off-purple">
                      CPO Agolia Modd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col justify-between mt-[150px] border-t-[6px] border-flysha-light-purple p-[100px_10px_30px]">
        <div className="container max-w-[1130px] mx-auto flex justify-between relative">
          <Image
            width={300}
            height={300}
            src="/assets/images/icons/Ellipse 4.png"
            className="absolute h-[300px] -top-[45px] -left-[20px] z-0"
            alt="icon"
          />
          <div className="flex shrink-0 h-fit z-10">
            <Image
              width={150}
              height={70}
              src="/assets/images/logos/logo.svg"
              alt=""
            />
          </div>
          <div className="flex gap-[100px] z-10">
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Explore</p>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Services
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Testimonials
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Pricing
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                About
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Services</p>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Pickup at Home
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                First Lounge Plus
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Business Room
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Bentley Power
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">About</p>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Company Profile
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Our Investors
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Media Press
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300"
              >
                Careers
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Connect</p>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  src="/assets/images/icons/call.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                +1 2208 1996
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  src="/assets/images/icons/dribbble.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                buildwithangga
              </Link>
              <Link
                href=""
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  src="/assets/images/icons/sms.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                team@bwa.com
              </Link>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-[60px] text-[#A0A0AC] text-sm z-10">
          All Rights Reserved. Copyright BuildWithAngga 2024.
        </p>
      </footer>
    </>
  );
}
