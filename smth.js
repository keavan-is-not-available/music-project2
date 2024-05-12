LWX = 0
LWY = 0
RWX = 0
RWY = 0
LWS = 0
RWS = 0
music1 = ""
music2 = ""
function preload() {
    music1 = loadSound("music.mp3")
    music2 = loadSound("music2.mp3")
}
function setup() {
    canvas = createCanvas(400, 300)
    vid = createCapture(VIDEO)
    vid.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)

}

function gotPoses() {
    console.log(results)
    LWX = results[0].pose.leftWrist.x
    LWY = results[0].pose.leftWrist.y
    RWX = results[0].pose.rightWrist.x
    RWY = results[0].pose.rightWrist.y
    LWS = results[0].pose.keypoints[9].score
    RWS = results[0].pose.keypoints[10].score
    console.log("x value is " + LWX + "," + RWX + ",y value is " + LWY + "," + RWY)
}

function draw() {
    image(vid, 0, 0, 400, 300)
    image(video, 0, 0, 600, 500)
    fill("red")
    stroke("red")

    music1 = music1.isPlaying()
    if (LWS > 0.2) {
        circle(LWX, LWY, 20)
        music2 = music2.isPlaying()
        if (music2 = true) {
            music2.stop()
        }
        music1 = music1.isPlaying()
        if (music1 = false) {
            music1.play()
        }
    }

    if (RWS > 0.2) {
        circle(RWX, RWY, 20)
        music1 = music1.isPlaying()
        if (music1 = true) {
            music1.stop()
        }
        music2 = music1.isPlaying()
        if (music2 = false) {
            music2.play()
        }
    }
}

