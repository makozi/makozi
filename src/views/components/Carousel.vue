<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="text-white font-weight-light">Recent Projects </h1>
                    <p class="lead text-white mt-4">Here are a few recent  projects. Desire to see more? 
                         <!-- <a href=""
                      class="nav-link" target="_blank">Send An Email</a> -->
                      </p>
                    <a href=""
                       class="btn btn-info mt-4" target="_blank">Send An Email</a>
                </div>
                <div class="col-lg-6 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/theme/project1.PNG"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/project2.PNG"></b-carousel-slide>
                              <b-carousel-slide img-src="img/theme/calculator.PNG"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/fluid_contact.PNG"></b-carousel-slide>
                              <b-carousel-slide img-src="img/theme/to_do_list.PNG"></b-carousel-slide>
                            <!-- <b-carousel-slide img-src="img/theme/img-2-1200x1000.jpg"></b-carousel-slide> -->
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";
import BCarouselSlide from "bootstrap-vue/es/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style>
</style>
