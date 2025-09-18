import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  useEffect(() => {


    var welcomeSlider = $('.welcome-slides');
    welcomeSlider.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      autoplayTimeout: 7000,
      nav: true,
      navText: ['', '<i class="fa fa-angle-left" aria-hidden="true"></i>']
    })
    welcomeSlider.on('translate.owl.carousel', function () {
      var layer = $("[data-animation]");
      layer.each(function () {
        var anim_name = $(this).data('animation');
        $(this).removeClass('animated ' + anim_name).css('opacity', '0');
      });
    });
    $("[data-delay]").each(function () {
      var anim_del = $(this).data('delay');
      $(this).css('animation-delay', anim_del);
    });
    $("[data-duration]").each(function () {
      var anim_dur = $(this).data('duration');
      $(this).css('animation-duration', anim_dur);
    });
    welcomeSlider.on('translated.owl.carousel', function () {
      var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
      layer.each(function () {
        var anim_name = $(this).data('animation');
        $(this).addClass('animated ' + anim_name).css('opacity', '1');
      });
    });

    var sliderPost = $('.mona-all-model-slide, .mona-models-slide, .mona-actor-slide, .mona-singer-slide');
    sliderPost.owlCarousel({
      items: 5,
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeout: 10000,
      smartSpeed: 1500,
      nav: true,
      navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    });


  });

  return (
    <>
      {/* Preloader */}
      {/* <div id="preloader">
        <div className="wrapper">
          <div className="cssload-loader" />
        </div>
      </div> */}
      {/* ***** Header Area Start ***** */}
      <header className="header-area">
        {/* Main Header Start */}
        <div className="main-header-area">
          <div className="classy-nav-container breakpoint-off">
            {/* Classy Menu */}
            <nav className="classy-navbar justify-content-between" id="monaNav">
              {/* Background Curve */}
              <div
                className="bg-curve"
                style={{ backgroundImage: "url(./img/core-img/curve.png)" }}
              />
              {/* Logo */}
              <a className="nav-brand" href="index.html">
                <img src="./img/core-img/logo.png" alt="" />
              </a>
              {/* Navbar Toggler */}
              <div className="classy-navbar-toggler">
                <span className="navbarToggler">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              {/* Menu */}
              <div className="classy-menu">
                {/* Menu Close Button */}
                <div className="classycloseIcon">
                  <div className="cross-wrap">
                    <span className="top" />
                    <span className="bottom" />
                  </div>
                </div>
                {/* Nav Start */}
                <div className="classynav">
                  <ul id="nav">
                    <li className="current-item">
                      <a href="./index.html">Home</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="./index.html">- Home</a>
                        </li>
                        <li>
                          <a href="./about.html">- About Us</a>
                        </li>
                        <li>
                          <a href="./projects.html">- Projects</a>
                        </li>
                        <li>
                          <a href="./models.html">- Models</a>
                        </li>
                        <li>
                          <a href="./casting.html">- Casting</a>
                        </li>
                        <li>
                          <a href="./blog.html">- Blog</a>
                        </li>
                        <li>
                          <a href="./single-blog.html">- Blog Details</a>
                        </li>
                        <li>
                          <a href="./contact.html">- Contact</a>
                        </li>
                        <li>
                          <a href="#">- Dropdown</a>
                          <ul className="dropdown">
                            <li>
                              <a href="#">- Dropdown Item</a>
                            </li>
                            <li>
                              <a href="#">- Dropdown Item</a>
                              <ul className="dropdown">
                                <li>
                                  <a href="#">- Even Dropdown</a>
                                </li>
                                <li>
                                  <a href="#">- Even Dropdown</a>
                                </li>
                                <li>
                                  <a href="#">- Even Dropdown</a>
                                </li>
                                <li>
                                  <a href="#">- Even Dropdown</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">- Dropdown Item</a>
                            </li>
                            <li>
                              <a href="#">- Dropdown Item</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="./projects.html">Project</a>
                    </li>
                    <li>
                      <a href="./models.html">Models</a>
                    </li>
                    <li>
                      <a href="./casting.html">Casting</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                      <ul className="dropdown">
                        <li>
                          <a href="./blog.html">- Blog</a>
                        </li>
                        <li>
                          <a href="./single-blog.html">- Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="./contact.html">Contact</a>
                    </li>
                  </ul>
                  {/* Search Icon */}
                  <div
                    className="search-icon"
                    data-toggle="modal"
                    data-target="#searchModal"
                  >
                    <i className="icon_search" />
                  </div>
                </div>
                {/* Nav End */}
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}
      {/* ***** Top Search Area Start ***** */}
      <div className="top-search-area">
        {/* Search Modal */}
        <div
          className="modal fade"
          id="searchModal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                {/* Close Button */}
                <button
                  type="button"
                  className="btn close-btn"
                  data-dismiss="modal"
                >
                  <i className="fa fa-times" />
                </button>
                {/* Form */}
                <form action="index.html" method="post">
                  <input
                    type="search"
                    name="top-search-bar"
                    className="form-control"
                    placeholder="Search and hit enter..."
                  />
                  <button type="submit">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Top Search Area End ***** */}
      {/* ***** Welcome Area Start ***** */}
      <section className="welcome-area">
        {/* Welcome Slides */}
        <div className="welcome-slides owl-carousel">
          {/* Single Welcome Slide */}
          <div className="single-welcome-slide">
            {/* Background Curve */}
            <div
              className="bg-curve"
              style={{ backgroundImage: "url(./img/core-img/curve.png)" }}
            />
            {/* Main Background Image */}
            <div
              className="main-bg-img bg-img"
              data-animation="fadeInUpBig"
              data-delay="200ms"
              style={{ backgroundImage: "url(./img/bg-img/18.jpg)" }}
            />
            {/* Welcome Text */}
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <div className="welcome-text">
                    <h2 data-animation="bounceInUp" data-delay="400ms">
                      Jesse <br />
                      Edwards
                    </h2>
                    <h5 data-animation="bounceInUp" data-delay="600ms">
                      Star Model 2019
                    </h5>
                    <a
                      href="#"
                      className="btn"
                      data-animation="bounceInUp"
                      data-delay="800ms"
                    >
                      Model details <i className="arrow_right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Info */}
            <div className="social-info">
              <a href="#" data-animation="bounceInDown" data-delay="1000ms">
                <i className="fa fa-facebook" /> <span>Facebook</span>
              </a>
              <a href="#" data-animation="bounceInDown" data-delay="1100ms">
                <i className="fa fa-twitter" /> <span>Twitter</span>
              </a>
              <a href="#" data-animation="bounceInDown" data-delay="1200ms">
                <i className="fa fa-instagram" /> <span>Instagram</span>
              </a>
              <a href="#" data-animation="bounceInDown" data-delay="1300ms">
                <i className="fa fa-youtube-play" /> <span>Youtube</span>
              </a>
            </div>
            {/* Pager */}
            <div className="slide-pager">
              <a href="#">Next: Naznin Niloy</a>
            </div>
          </div>
          {/* Single Welcome Slide */}
          <div className="single-welcome-slide">
            {/* Background Curve */}
            <div
              className="bg-curve"
              style={{ backgroundImage: "url(./img/core-img/curve.png)" }}
            />
            {/* Main Background Image */}
            <div
              className="main-bg-img bg-img"
              data-animation="fadeInUpBig"
              data-delay="200ms"
              style={{ backgroundImage: "url(./img/bg-img/19.jpg)" }}
            />
            {/* Welcome Text */}
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <div className="welcome-text">
                    <h2 data-animation="bounceInUp" data-delay="400ms">
                      Naznin <br />
                      Niloy
                    </h2>
                    <h5 data-animation="bounceInUp" data-delay="600ms">
                      Star Model 2019
                    </h5>
                    <a
                      href="#"
                      className="btn"
                      data-animation="bounceInUp"
                      data-delay="800ms"
                    >
                      Model details <i className="arrow_right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Info */}
            <div className="social-info">
              <a href="#" data-animation="bounceInDown" data-delay="1000ms">
                <i className="fa fa-facebook" /> <span>Facebook</span>
              </a>
              <a href="#" data-animation="bounceInDown" data-delay="1100ms">
                <i className="fa fa-twitter" /> <span>Twitter</span>
              </a>
              <a href="#" data-animation="bounceInDown" data-delay="1200ms">
                <i className="fa fa-instagram" /> <span>Instagram</span>
              </a>
              <a href="#" data-animation="bounceInDown" data-delay="1300ms">
                <i className="fa fa-youtube-play" /> <span>Youtube</span>
              </a>
            </div>
            {/* Pager */}
            <div className="slide-pager">
              <a href="#">Next: Shaila Ritu</a>
            </div>
          </div>
          {/* Single Welcome Slide */}
          <div className="single-welcome-slide">
            {/* Background Curve */}
            <div
              className="bg-curve"
              style={{ backgroundImage: "url(./img/core-img/curve.png)" }}
            />
            {/* Main Background Image */}
            <div
              className="main-bg-img bg-img"
              data-animation="fadeInUpBig"
              data-delay="200ms"
              style={{ backgroundImage: "url(./img/bg-img/20.jpg)" }}
            />
            {/* Welcome Text */}
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <div className="welcome-text">
                    <h2 data-animation="bounceInUp" data-delay="400ms">
                      Shaila <br />
                      Ritu
                    </h2>
                    <h5 data-animation="bounceInUp" data-delay="600ms">
                      Star Model 2019
                    </h5>
                    <a
                      href="#"
                      className="btn"
                      data-animation="bounceInUp"
                      data-delay="800ms"
                    >
                      Model details <i className="arrow_right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Info */}
            <div className="social-info">
              <a href="#" data-animation="bounceInDown" data-delay="1000ms">
                <i className="fa fa-facebook" /> <span>Facebook</span>
              </a>
              <a href="#" data-animation="bounceInDown" data-delay="1100ms">
                <i className="fa fa-twitter" /> <span>Twitter</span>
              </a>
              <a href="#" data-animation="bounceInDown" data-delay="1200ms">
                <i className="fa fa-instagram" /> <span>Instagram</span>
              </a>
              <a href="#" data-animation="bounceInDown" data-delay="1300ms">
                <i className="fa fa-youtube-play" /> <span>Youtube</span>
              </a>
            </div>
            {/* Pager */}
            <div className="slide-pager">
              <a href="#">Next: Jesse Edwards</a>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Welcome Area End ***** */}
      {/* ***** About Us Area Start ***** */}
      <section className="mona-about-us-area mb-30 section-padding-80-0">
        <div className="container">
          <div className="row">
            {/* About Us Thumbnail */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="about-us-thumbnail mb-50 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <span className="line" />
                <img src="./img/bg-img/16.jpg" alt="" />
                <span className="line2" />
              </div>
            </div>
            {/* About Us Thumbnail */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="about-us-thumbnail mb-50 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <span className="line" />
                <img src="./img/bg-img/17.jpg" alt="" />
                <span className="line2" />
              </div>
            </div>
            {/* About Us Content */}
            <div className="col-12 col-lg-4">
              <div
                className="about-us-content mb-50 wow fadeInUp"
                data-wow-delay="700ms"
              >
                <h2>We Have 20+ Years Practical Experience in Agency</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing esed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna.
                </p>
                <p>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  gubergren no sea takimata sanctus est Lorem ipsum dolor sit amet
                  ipsumlor eut consetetur sadipscing elitr.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Single Service Area */}
        <div className="container">
          <div className="service-area mt-80">
            <div className="row">
              {/* Single Service Area */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="single-service-area mb-50 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <i className="icon_film" />
                  <h5>Fashion Shows</h5>
                  <p>At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>
              </div>
              {/* Single Service Area */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="single-service-area mb-50 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <i className="icon_calendar" />
                  <h5>Special Events</h5>
                  <p>At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>
              </div>
              {/* Single Service Area */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="single-service-area mb-50 wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <i className="icon_camera_alt" />
                  <h5>Commercial Photo</h5>
                  <p>At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>
              </div>
              {/* Single Service Area */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="single-service-area mb-50 wow fadeInUp"
                  data-wow-delay="700ms"
                >
                  <i className="icon_house_alt" />
                  <h5>Model School</h5>
                  <p>At vero eos et accusam et justo duo dolores et ea rebum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** About Us Area End ***** */}
      {/* ***** Model Area Start ***** */}
      <section className="mona-model-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="model-tab-area">
                <ul
                  className="nav nav-tabs mb-50"
                  id="mona_modelTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="tab1"
                      data-toggle="tab"
                      href="#tab-1"
                      role="tab"
                      aria-controls="tab-1"
                      aria-selected="true"
                    >
                      All
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="tab2"
                      data-toggle="tab"
                      href="#tab-2"
                      role="tab"
                      aria-controls="tab-2"
                      aria-selected="false"
                    >
                      Model
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="tab3"
                      data-toggle="tab"
                      href="#tab-3"
                      role="tab"
                      aria-controls="tab-3"
                      aria-selected="false"
                    >
                      Actor
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="tab4"
                      data-toggle="tab"
                      href="#tab-4"
                      role="tab"
                      aria-controls="tab-4"
                      aria-selected="false"
                    >
                      Singer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Mona Tab Content */}
        <div className="mona-tab-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="tab-content" id="mona_modelTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tab-1"
                    role="tabpanel"
                    aria-labelledby="tab1"
                  >
                    {/* All Model Slide */}
                    <div className="mona-all-model-slide owl-carousel">
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/10.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Willie Figueroa</h3>
                          <h6>Model</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/11.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Della Martinez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Peter Alvarez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Olive Ross</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Louise Ray</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/10.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Willie Figueroa</h3>
                          <h6>Model</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/11.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Della Martinez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Peter Alvarez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Olive Ross</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Louise Ray</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-2"
                    role="tabpanel"
                    aria-labelledby="tab2"
                  >
                    {/* All Model Slide */}
                    <div className="mona-models-slide owl-carousel">
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/10.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Willie Figueroa</h3>
                          <h6>Model</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/11.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Della Martinez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Peter Alvarez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Olive Ross</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Louise Ray</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/10.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Willie Figueroa</h3>
                          <h6>Model</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/11.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Della Martinez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Peter Alvarez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Olive Ross</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Louise Ray</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-3"
                    role="tabpanel"
                    aria-labelledby="tab3"
                  >
                    {/* All Model Slide */}
                    <div className="mona-actor-slide owl-carousel">
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/10.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Willie Figueroa</h3>
                          <h6>Model</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/11.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Della Martinez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Peter Alvarez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Olive Ross</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Louise Ray</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/10.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Willie Figueroa</h3>
                          <h6>Model</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/11.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Della Martinez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Peter Alvarez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Olive Ross</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Louise Ray</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-4"
                    role="tabpanel"
                    aria-labelledby="tab4"
                  >
                    {/* All Model Slide */}
                    <div className="mona-singer-slide owl-carousel">
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/10.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Willie Figueroa</h3>
                          <h6>Model</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/11.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Della Martinez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Peter Alvarez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Olive Ross</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Louise Ray</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/10.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Willie Figueroa</h3>
                          <h6>Model</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/11.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Della Martinez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/12.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Peter Alvarez</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/9.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Olive Ross</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                      {/* Single Model Item */}
                      <div className="single-model-item">
                        <div className="model-thumbnail">
                          {/* First Thumbnail */}
                          <img
                            className="first-thumbnail"
                            src="./img/bg-img/13.jpg"
                            alt=""
                          />
                          {/* Second Thumbnail */}
                          <img
                            className="second-thumbnail"
                            src="./img/bg-img/14.jpg"
                            alt=""
                          />
                          {/* Share Info */}
                          <div className="share-info">
                            {/* Share Icon */}
                            <div className="share-icon">
                              <a href="#">
                                <i className="fa fa-share-alt" aria-hidden="true" />
                              </a>
                            </div>
                            {/* Others Icon */}
                            <div className="others-icon">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-pinterest" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="model-info">
                          <h3>Louise Ray</h3>
                          <h6>actor</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Model Area End ***** */}
      {/* ***** Client Feedback Area Start ***** */}
      
      {/* ***** Client Feedback Area End ***** */}
      {/* ***** CTA Area Start ***** */}
      <section className="mona-cta-area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-content">
                <h2>Do You Want To Be A Model?</h2>
                <h6>
                  Lorem ipsum dolor sit amet, consetetur sadipscing esed diam nonumy
                  eirmod tempor.
                </h6>
                <a href="#" className="btn mona-btn">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** CTA Area End ***** */}
      {/* ***** Blog Area Start ***** */}
  
      {/* ***** Blog Area End ***** */}
      {/* ***** Footer Area Start ***** */}
      <footer className="footer-area section-padding-80-0">
        <div className="container">
          <div className="row justify-content-between">
            {/* Single Footer Widget */}
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="single-footer-widget mb-60">
                {/* Logo */}
                <a href="#" className="d-block mb-4">
                  <img src="./img/core-img/logo.png" alt="" />
                </a>
                <p>
                  Integer vehicula mauris libero, at molestie eros imperdiet sit
                  amet. Suspendisse mattis ante sit amet ante.
                </p>
                <div className="copywrite-text">
                  <p>
                    ©
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
            </div>
            {/* Single Footer Widget */}
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="single-footer-widget mb-60">
                {/* Widget Title */}
                <h4 className="widget-title">Our Link</h4>
                {/* Catagories Nav */}
                <nav>
                  <ul className="our-link">
                    <li>
                      <a href="#">New Faces</a>
                    </li>
                    <li>
                      <a href="#">Model Of the Week</a>
                    </li>
                    <li>
                      <a href="#">Classic Women</a>
                    </li>
                    <li>
                      <a href="#">Privacy Terms</a>
                    </li>
                    <li>
                      <a href="#">Classic Men</a>
                    </li>
                    <li>
                      <a href="#">Conditions</a>
                    </li>
                    <li>
                      <a href="#">Hair &amp; Styles</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* Single Footer Widget */}
            <div className="col-12 col-lg-4 col-xl-3">
              <div className="single-footer-widget mb-60">
                {/* Widget Title */}
                <h4 className="widget-title">Contact</h4>
                {/* Footer Content */}
                <div className="footer-content mb-30">
                  <h4>+01-3-8888-6868</h4>
                  <h6>40 Baria Sreet 133/2 NewYork City</h6>
                </div>
                {/* Social Info */}
                <div className="footer-social-info">
                  <a
                    href="#"
                    className="facebook"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Facebook"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                  <a
                    href="#"
                    className="twitter"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Twitter"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="pinterest"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Pinterest"
                  >
                    <i className="fa fa-pinterest" />
                  </a>
                  <a
                    href="#"
                    className="instagram"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                  <a
                    href="#"
                    className="youtube"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="YouTube"
                  >
                    <i className="fa fa-youtube-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>

  )
}

export default App
