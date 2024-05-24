import donkey_car_lane_detection from "../images/donkey_car_lane_detection.jpg"
import object_detection from "../images/object_detection.jpg"
import lane_detection from "../images/lane_detection.jpg"
import agile_car from "../images/agile_car.jpg"

export const outcomesFile = [
  { 
    teamName: "AGILE CAR", outcomes: [
      {
        img: agile_car, 
        title: "Optical Navigation", 
        text: "Developed optical navigation capabilities, where the robot navigates by identifying and reading text off\
        of signs. Integrated additional sensors and compute on the Scout Mini platform. Software stack developed using\
        image processing, optical character recognition, and visual servoing techniques."
      }
    ]
  },

  { 
    teamName: "DONKEY CAR", outcomes: [
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
    teamName: "QCAR", outcomes: [
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