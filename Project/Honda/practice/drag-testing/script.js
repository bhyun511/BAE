class DraggableSlider {
  constructor() {
    this.container = document.querySelector('.js-drag-slider');
    this.proxy = this.container.querySelector('.proxy');
    this.slider = document.querySelector('.js-drag-slider-inner');
    this.sliderContent = document.querySelector('.js-drag-slider-content');
    this.slides = [...this.container.querySelectorAll('.js-drag-slide')];
    this.slidesNumb = this.slides.length;
    this.sliderWidth = 0;
    
    this.draggable = null;

		this.current = 0;
		this.last = 0;

		this.init();
  }
  
  setBounds() {
    this.sliderWidth = this.slides[0].offsetWidth * this.sliderNumber;
    
    gsap.set([this.slider, this.proxy], {
      width: this.slider + 'px',
      x: "+=0",
      // skewType: "simple",
    })
  }
  
  createDraggable() {
    console.log('cd',this)
    var slider = this.slider,
        tracker = InertiaPlugin.track(slider, "x")[0],
        velocity = VelocityTracker.track(slider, "x")[0],
        pressedTip;
    
    let updateX = function(e) {
          console.log('onDrag', e)
      console.log(this.offset)
          gsap.to(slider, {
            duration: 0.4,
            ease: "power1.inOut",
            // immediateRender: true,
            // overwrite: true,
            // x: this.x - this.offset,
            x: this.x,
          })
        }
    
    this.draggable = Draggable.create(this.proxy, {
      type: 'x',
      throwProps: true,
      edgeResistance: 0,
      onPress: function(e) {
        var bounds = this.target.getBoundingClientRect();
        // pressedTop = (e.clientY < bounds.y + bounds.height / 2);
        // console.log(e, bounds)
        // console.log('hi',this.startX, tracker, tracker[0]._props.x.t1)
        console.log(this)
        // console.dir(slider)
        console.log(tracker, velocity)
        console.log('========')
        
        
        // this.current = this.pointerX - tracker[0]._props.x.t1;
        // this.offset = this.x - slider.gsTransform.x;
        // this.offset = this.x - slider._gsap.x;
        this.offset = this.startX - slider._gsap.xOffset;
        // this.offset = this.startX - slider.gsTransform.x;
        // this.offset = this.startX - tracker[0]._props.x.t1;
        gsap.killTweensOf(slider);
        // gsap.to(slider, {
        //   duration: 0.2,
        //   skewX: 0
        // })
      },
      onDrag: updateX,
      bounds: this.container,
    })[0]
  }
  
  destroy() {
    this.draggable.kill();
  }
  
  init() {
    this.setBounds();
    this.createDraggable();
  }
}

const slider = new DraggableSlider();

console.log(slider);