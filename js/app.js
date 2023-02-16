particlesJS(
    "particles-js", { // Select the container element for the particles and configure the particle settings
    "particles": {
      "number": { // Set the number of particles and their density
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": { // Set the color of the particles
        "value": "#ffffff"
      },
      "shape": { // Set the shape of the particles and their style
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": { // Set the opacity of the particles and their animation properties
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": { // Set the size of the particles and their animation properties
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": { // Set the style and behavior of the particle lines
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.47980807676929244,
        "width": 1
      },
      "move": { // Set the movement behavior of the particles
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": { // Set the behavior of particles when they are attracted to the cursor
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": { // Configure interactivity options for the particles
      "detect_on": "window",
      "events": {
        "onhover": { // Configure the hover behavior of the particles
          "enable": true,
          "mode": "grab"
        },
        "onclick": { // Configure the click behavior of the particles
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": { // Configure different particle modes for interactivity
        "grab": { // Set the behavior of particles when they are grabbed by the cursor
          "distance": 170.0914444003467,
          "line_linked": {
            "opacity": 0.6071794871794872
          },
          "selectors": "#particles-js",
          "mode": "bounce",
        },
        "bubble": { // Set the behavior of particles when a bubble is created
          "distance": 206.53961105756386,
          "size": 4.049796295246351,
          "duration": 2.4298777771478104,
          "opacity": 0.5831706665154744,
          "speed": 3
        },
        // "interact": {
        //   "selectors": "#particles-js",
        //   "mode": "bounce"
        // },
        "repulse": { // Set the behavior of particles when they
        "distance":200,"duration":0.4},
        "push":{"particles_nb":4},
        "remove":{"particles_nb":2}}},
        "retina_detect":true},
        );