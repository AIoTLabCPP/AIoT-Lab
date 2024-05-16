import donkey_car_lane_detection from "../images/donkey_car_lane_detection.jpg"
import object_detection from "../images/object_detection.jpg"
import lane_detection from "../images/lane_detection.jpg"

export const outcomesFile = [
  { 
    teamName: "AGILE CAR OUTCOMES", outcomes: [
      {
        img: object_detection, 
        title: "title", 
        text: "text"
      },

      {
        img: object_detection, 
        title:"title", 
        text: "text"
      }
    ]
  },

  { 
    teamName: "DONKEY CAR OUTCOMES", outcomes: [
      {
        img: donkey_car_lane_detection, 
        title:"Lane Detection", 
        text: "We trained DonkeyCar using image data with OpenCV and TensorFlow to allow it to detect and stay in\
        lanes of a 20 feet track. Going forward this setup will allow us to test different lane detection machine\
        learning models in search of the fastest, best methodology."
      }
    ]
  },

  { 
    teamName: "QCAR OUTCOMES", outcomes: [
      {
        img: object_detection, 
        title:"Object Detection", 
        text: "Our current software is able to detect obstacles and reroute the course to avoid any obstacle in its path.\
        The software utilizes LIDAR technology and is able to plan a course that does not hit other possible obstacles."
      },

      {
        img: lane_detection, 
        title:"Lane Detection", 
        text: "The current software utilizes computer vision to detect lanes and output steering commands to the vehicle."
      }
    ]
  }
]