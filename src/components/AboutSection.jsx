import { Briefcase, Code, User } from 'lucide-react'

function AboutSection() {
  return (
    <div>
      <section id='about' className='py-24 px-4 relative'>{" "}
        <div className='container mx-auto max-w-5xl'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            About<span className='text-primary'> Me</span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <h3 className='text-2xl font-semibold'>
                Passionate Web Developer
              </h3>
              <p className='text-muted-foreground'>I'm a passionate web developer driven by creativity and clean design.
                I specialize in building responsive, user-friendly interfaces using modern frontend technologies.
                With a strong focus on performance and usability, I turn ideas into engaging digital experiences.
              </p>
              <p className='text-muted-foreground'>Web development is not just my skill — it's my passion.
                I enjoy building interfaces that feel intuitive and perform beautifully.
                Keeping up with evolving tech, I aim to make the web more accessible and engaging.
              </p>

              <div className='flex sm-flex-row gap-4 pt-4 justify-center'>
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
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-full bg-primary/10'>
                    <Code className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>Web Development</h4>
                    <p className='text-muted-foreground'>
                      Creating responsive websites and web applications with modern frameworks.
                    </p>
                  </div>
                </div>
              </div>
              <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-full bg-primary/10'>
                    <User className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                    <p className='text-muted-foreground'>
                      Designing intuitive user interfaces and seamless user experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-full bg-primary/10'>
                    <Briefcase className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>Project Management</h4>
                    <p className='text-muted-foreground'>
                      With strong planning and communication, I manage projects efficiently from concept to completion.
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