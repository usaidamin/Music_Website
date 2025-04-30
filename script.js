let footer = document.getElementById("footer");
let navbar = document.getElementById("navbar");

navbar.innerHTML = `
<div class="logo">Beat<span>Breeze</span></div>
        <nav>
            <div class="menu-btn">☰</div>
            <ul class="menu">
                <li><a href="./index.html">Home</a></li>
                
                <li>
                    <a href="#">Genres</a>
                    <ul class="dropdown-menu">
                        <li><a href="./pop.html">Pop</a></li>
                        <li><a href="./rock.html">Rock</a></li>
                        <li><a href="./jazz.html">Jazz</a></li>
                        <li><a href="./classical.html">Classical</a></li>
                        <li><a href="./rap.html">Rap</a></li>
                    </ul>
                </li>
                <li><a href="./playlist.html">Playlist</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
`

footer.innerHTML = `
<section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="" class="me-4 social-icons text-decoration-none text-reset">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="me-4 social-icons text-decoration-none text-reset">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="me-4 social-icons text-decoration-none text-reset">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="me-4 social-icons text-decoration-none text-reset">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="me-4 social-icons text-decoration-none text-reset">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="me-4 social-icons text-decoration-none text-reset">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </section>
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <div class="row mt-3">
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              Products
            </h6>
            <p>
              <a href="#!" class="text-reset text-decoration-none">Angular</a>
            </p>
            <p>
              <a href="#!" class="text-reset text-decoration-none">React</a>
            </p>
            <p>
              <a href="#!" class="text-reset text-decoration-none">Vue</a>
            </p>
            <p>
              <a href="#!" class="text-reset text-decoration-none">Laravel</a>
            </p>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              Useful links
            </h6>
            <p>
              <a href="#!" class="text-reset text-decoration-none">Pricing</a>
            </p>
            <p>
              <a href="#!" class="text-reset text-decoration-none">Settings</a>
            </p>
            <p>
              <a href="#!" class="text-reset text-decoration-none">Orders</a>
            </p>
            <p>
              <a href="#!" class="text-reset text-decoration-none">Help</a>
            </p>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              info@example.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </div>
    </section>
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2025 Copyright:
      <a class="text-reset text-decoration-none fw-bold" href="./home.html">Beat Brezze.com</a>
    </div>
`