import { Handshake, Code, ShieldCheck } from 'lucide-react'

function AboutSection() {
  return (
    <div>
      <section id='about' className='py-16 sm:py-24 px-4 sm:px-6 relative'>{" "}
        <div className='container mx-auto max-w-5xl'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center'>
            About<span className='text-primary'> Me</span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <h3 className='text-xl sm:text-2xl font-semibold'>
                Passionate Developer & Cybersecurity Enthusiast
              </h3>
              <p className='text-muted-foreground'>I'm a full-stack MERN developer who loves building clean, responsive, and user-friendly web experiences. I specialize in crafting interfaces
                that are both functional and visually engaging, with a strong focus on performance and usability.
              </p>
              <p className='text-muted-foreground'>Beyond development, I'm actively diving into the world of cybersecurity
                exploring threat analysis, network protocols, and security fundamentals.
                Driven by curiosity, I'm on a journey to understand not just how systems are built,
                but how they can be secured and protected.
              </p>

              <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center'>
                <a href='#contact' className='cosmic-button'>
                  {" "}
                  Get In Touch
                </a>
                <a
                  href="/ArchiShah_CV.pdf"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className='grid grid-cols-1 gap-6'>
              <div className='gradient-border p-6 card-hover'>
                <div className='flex flex-col sm:flex-row items-start gap-3 sm:gap-4'>
                  <div className='p-3 rounded-full bg-primary/10 self-start'>
                    <Code className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>Web Development</h4>
                    <p className='text-muted-foreground'>
                      Building responsive, full-stack web applications using the MERN stack with a focus on clean code, performance, and seamless user experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className='gradient-border p-6 card-hover'>
                <div className='flex flex-col sm:flex-row items-start gap-3 sm:gap-4'>
                  <div className='p-3 rounded-full bg-primary/10 self-start'>
                    <ShieldCheck className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>Network & Security Fundamentals</h4>
                    <p className='text-muted-foreground'>
                      Currently learning core networking concepts, threat analysis, and SOC fundamentals — developing the skills to monitor, detect, and respond to real-world cyber threats.
                    </p>
                  </div>
                </div>
              </div>
              <div className='gradient-border p-6 card-hover'>
                <div className='flex flex-col sm:flex-row items-start gap-3 sm:gap-4'>
                  <div className='p-3 rounded-full bg-primary/10 self-start'>
                    <Handshake className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>Problem Solving & Collaboration</h4>
                    <p className='text-muted-foreground'>
                      Strong analytical thinking and team collaboration skills, sharpened through real-world internship experience and hands-on project development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection