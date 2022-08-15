import "./App.css";
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <>
      <header className="header">
        <span className="logo_text">Subendra</span>
        <nav className="navbar">
          <ul className="navbar_list">
            <li>
              <a href="#" className="navbar_link home_link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="navbar_link about_link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="navbar_link service_link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="navbar_link portfolio_link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="navbar_link contact_link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* hero section start */}
      <main>
        <section className="section_hero section">
          <div className="container grid grid_two_column">
            <div className="section_hero_data">
              <p className="hero_top_data"> This is Me</p>
              <h1 className="hero_bold_heading">Subendra Mandal</h1>
              <p className="hero_para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                quae debitis exercitationem quos voluptates consequuntur nobis
                suscipit aliquid? Ducimus perspiciatis eaque asperiores
                accusantium qui in laboriosam dolor voluptatum neque enim.
              </p>
              <div>
                <a href="#" className="btn-grad hireme_btn">
                  Hire Me
                </a>
              </div>
            </div>
            <div className="section_hero_image">
              <img
                src="images/skm.jpg"
                className="hero_image"
                width="100%"
                alt="Hero user Image"
              />
            </div>
          </div>
        </section>
      </main>

      <section className="section_bio_data section">
        <div className="container grid grid_two_column">
          <div className="biodata_image">
            <img src="images/skm2.jpg" alt="BioData_image" />
          </div>
          <div className="bio_data">
            <h2 className="common_heading">My Bio-Data</h2>
            <p>
              {" "}
              Quisquam recusandae eligendi incidunt aliquid assumenda minus
              dolorum officiis eum! Illo odit aspernatur doloremque magnam non.
              Distinctio, illum repellat. Id.
            </p>
            <br />
            <p>
              voluptates repellendus exercitationem assumenda aliquam fugiat
              expedita delectus eos.
            </p>

            <div className="bio_data_stats">
              <div className="bio_stats">
                <h3>html</h3>

                <div className="bio_progress_bar bio_progress_bar1">
                  <span>80%</span>
                </div>
              </div>

              <div className="bio_stats">
                <h3>css</h3>

                <div className="bio_progress_bar bio_progress_bar2">
                  <span>99%</span>
                </div>
              </div>

              <div className="bio_stats">
                <h3>Javascript</h3>

                <div className="bio_progress_bar bio_progress_bar3">
                  <span>90%</span>
                </div>
              </div>
              <div className="bio_stats">
                <h3>React</h3>

                <div className="bio_progress_bar bio_progress_bar4">
                  <span>85%</span>
                </div>
              </div>
              <div className="bio_stats">
                <h3>Mern</h3>

                <div className="bio_progress_bar bio_progress_bar4">
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-portfolio" id="portfolio_section">
        <div className="container">
          <h2 className="common_heading">Latest Work</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A rerum
            impedit architecto eius natus non tenetur repellat vel enim porro?
          </p>
        </div>

        <div className="p_btns">
          <div className="btn-grad p_btn" data_btn_num="1">
            Designing
          </div>
          <div className="btn-grad p_btn" data_btn_num="2">
            Backend
          </div>
          <div className="btn-grad p_btn" data_btn_num="3">
            Server
          </div>
        </div>

        <div className="container grid grid_three_column portfolio_images">
          <div className="img_overlay p_btn__1">
            <img src="folio/1.jpg" alt="Project Image" />
            <div className="overlay">
              <a href="#" target="_project image" className="common_heading">
                Project 1
              </a>
            </div>
          </div>

          <div className="img_overlay p_btn__2">
            <img src="folio/2.jpg" alt="Project Image" />
            <div className="overlay">
              <a href="#" target="_project image" className="common_heading">
                Project 2
              </a>
            </div>
          </div>

          <div className="img_overlay p_btn__3">
            <img src="folio/3.jpg" alt="Project Image" />
            <div className="overlay">
              <a href="#" target="_project image" className="common_heading">
                Project 3
              </a>
            </div>
          </div>

          <div className="img_overlay p_btn__4">
            <img src="folio/4.jpg" alt="Project Image" />
            <div className="overlay">
              <a href="#" target="_project image" className="common_heading">
                Project 4
              </a>
            </div>
          </div>

          <div className="img_overlay p_btn__5">
            <img src="folio/5.jpg" alt="Project Image" />
            <div className="overlay">
              <a href="#" target="_project image" className="common_heading">
                Project 5
              </a>
            </div>
          </div>

          <div className="img_overlay p_btn__6">
            <img src="folio/6.jpg" alt="Project Image" />
            <div className="overlay">
              <a href="#" target="_project image" className="common_heading">
                Project 6
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* INCREMENT NUMBER SECTION */}

      <section className="section section_work_data">
        <div className="container grid grid_four_column">
          <div>
            <h2 className="counter_number">2000+</h2>
            <p className="increment_para">Project Completed</p>
          </div>
          <div>
            <h2 className="counter_number">2000+</h2>
            <p className="increment_para">Project Completed</p>
          </div>
          <div>
            <h2 className="counter_number">2000+</h2>
            <p className="increment_para">Project Completed</p>
          </div>
          <div>
            <h2 className="counter_number">2000+</h2>
            <p className="increment_para">Project Completed</p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}

      <section className="section  section_services">
        <div className="container">
          <h2 className="common_heading">Services Offers</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis commodi voluptatem accusantium sapiente veritatis maxime, molestiae repellat dolor rem animi deserunt exercitationem! Iure aspernatur dolorem vitae laudantium asperiores omnis alias.</p>
        </div>

        <div className="container grid grid_three_column">
          <div className="service_box">
          <i class="ri-home-6-line service_icon"></i>
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consequatur inventore iure animi eaque veritatis quaerat odit iusto assumenda sequi.</p>
          </div>
          <div className="service_box">
          <i class="ri-home-6-line service_icon"></i>
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consequatur inventore iure animi eaque veritatis quaerat odit iusto assumenda sequi.</p>
          </div>
          <div className="service_box">
          <i class="ri-home-6-line service_icon"></i>
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consequatur inventore iure animi eaque veritatis quaerat odit iusto assumenda sequi.</p>
          </div>
          <div className="service_box">
          <i class="ri-home-6-line service_icon"></i>
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consequatur inventore iure animi eaque veritatis quaerat odit iusto assumenda sequi.</p>
          </div>
          <div className="service_box">
          <i class="ri-home-6-line service_icon"></i>
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consequatur inventore iure animi eaque veritatis quaerat odit iusto assumenda sequi.</p>
          </div>
          <div className="service_box">
          <i class="ri-home-6-line service_icon"></i>
          <h3>Web Design</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere consequatur inventore iure animi eaque veritatis quaerat odit iusto assumenda sequi.</p>
          </div>
        </div>
      </section>

    </>
  );
}

export default App;
