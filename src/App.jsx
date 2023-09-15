import Dropdown from "./components/Dropdown"
import data from './data/data.json'

import womanMobile from './assets/illustration-woman-online-mobile.svg'
import patternMobile from './assets/bg-pattern-mobile.svg'
import womanDesktop from './assets/illustration-woman-online-desktop.svg'
import patternDesktop from './assets/bg-pattern-desktop.svg'
import boxDesktop from './assets/illustration-box-desktop.svg'


function App() {

  return (
    <>
      <main className="font-Kumbh grid w-screen h-screen justify-center items-center text-12px">
        <section className="lg:flex lg:items-center lg:justify-center w-[375px] lg:w-fit lg:px-[150px] h-fit bg-gradient-to-b from-Soft-violet to-Soft-blue px-[24px] py-[50px] lg:py-[100px]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-center">
            <div className="flex flex-col items-center justify-center relative">
              <img className="w-[237px] h-[181px] absolute lg:sr-only top-0 z-10" src={womanMobile} alt="woman-mobile"/>
              <img className="absolute lg:sr-only top-[110px] z-0" src={patternMobile} alt="pattern-mobile" />
              <img className="hidden lg:block absolute top-[-54px] left-[-82px] z-20 max-w-none" src={boxDesktop} alt="woman-box" />
            </div>
            <div className="lg:flex lg:flex-row lg:items-center pt-[140px] lg:pt-[0] pb-[30px] w-[327px] lg:w-[922px] h-fit min-h-[500px] bg-white mt-[110px] lg:mt-0 rounded-3xl lg:relative lg:overflow-hidden">
              <img className="hidden relative z-10 lg:block lg:ml-[-66px] lg:pr-[40px]" src={womanDesktop} alt="woman-desktop" />
              <img className="hidden lg:block absolute top-[-308px] left-[-513px] z-0" src={patternDesktop} alt="pattern-desktop" />
              <div className="flex flex-col w-[327px] lg:ml-[60px] lg:mt-[30px]">
                <h1 className="font-bold text-3xl mb-6 text-center lg:text-left lg:ml-5">FAQ</h1>
                {
                  data.card_data.map(object => 
                    <Dropdown
                      key={object.id}
                      title={object.title}
                      paragraph={object.paragraph}
                    />
                  )
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
