/******* DETECT BROWSER ********/
function detectBrowser() {
    if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        browserName = "firefox";
        var e = new Number(RegExp.$1);
        browserVersion = Math.floor(e)
    }
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        browserName = "internet explorer";
        var r = new Number(RegExp.$1);
        browserVersion = Math.floor(r)
    }
    if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
        browserName = "opera";
        var a = new Number(RegExp.$1);
        browserVersion = Math.floor(a)
    }
    navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && -1 != navigator.userAgent.toLowerCase().indexOf("safari") && (browserName = "chrome", browserVersion = ""), -1 == navigator.userAgent.toLowerCase().indexOf("chrome") && -1 != navigator.userAgent.toLowerCase().indexOf("safari") && (browserName = "safari", browserVersion = "")
}

function detectDevice() {
    deviceName = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? "iosdevice" : navigator.userAgent.match(/Android/i) ? "android" : navigator.userAgent.match(/BlackBerry/i) ? "blackberry" : navigator.userAgent.match(/IEMobile/i) ? "iemobile" : navigator.userAgent.match(/Silk/i) ? "kindle" : "computer"
}
var browserName, browserVersion;
detectBrowser();
var deviceName;
detectDevice();

/******** START OF PRELOADER *********/
function setPreloaderTransparentOrDisplaynone() {
    "internet explorer" == browserName && browserVersion <= 8 ? preloaderDiv.setAttribute("class", "displaynone") : preloaderDiv.setAttribute("class", "transparent")
}
var preloaderDiv = document.getElementById("preloader");
setPreloaderTransparentOrDisplaynone();

function hidePreloader() {
    preloaderDiv.setAttribute("class", "displaynone")
}

function showPreloader() {
    preloaderDiv.setAttribute("class", "")
}

function shiftUpPreloader() {
    turnOffPreloaderDotsAnimation(), $(preloaderDiv).stop().animate({
        bottom: "100%"
    }, 1e3, function() {
        hidePreloader()
    })
}

function turnOffPreloaderDotsAnimation() {
    preloaderDotsDiv.setAttribute("class", "preloader-dots-static")
}
var preloaderDotsDiv = document.getElementById("preloader-dots");
showPreloader();
/********* END OF PRELOADER *********/

function setContainerTransparentOrDisplaynone() {
    "internet explorer" == browserName && browserVersion <= 8 ? containerDiv.setAttribute("class", "displaynone") : containerDiv.setAttribute("class", "transparent")
}
var containerDiv = document.getElementById("container");
setContainerTransparentOrDisplaynone();



function orientationChangeHandler(e) {
    disableScrollOrSwipe(), setTimeout(function() {
        $(window).trigger("resize")
    }, 500)
}

function enableScrollOrSwipe() {
    canScrollOrSwipe = !0
}

function disableScrollOrSwipe() {
    canScrollOrSwipe = !1
}

function initVariablesAfterShowContainer() {
    fireworkCenterX = .5 * fireworkArray[0].offsetWidth, fireworkCenterY = .5 * fireworkArray[0].offsetHeight, fireworkOneRadiusDistance = (fireworkCenterY - fireworkDotRadius) / fireworkRowNumber, fireworkOneRotationAngle = 2 * Math.PI / fireworkColumnNumber
}

function resetVariables() {
    canAnimatePodInformation = canAnimatePlantInformation = !(pageVerticalPosition = 0), 0 == isFishStillAnimating && (canAnimateFishInformation = !0), 0 == isCrabStillAnimating && (canAnimateCrabInformation = !0), 0 == isTurtleStillAnimating && (canAnimateTurtleInformation = !0), canDrawManyFireworks = canAnimateNbaInformation = canAnimateAlienInformation = canAnimateSquidInformation = canAnimateRobotInformation = !0
}

function resetFunctions() {
    positionPlants(), positionPods(), 0 == isFishStillAnimating && positionSeaAnimals(fishArray, numberOfFishInEachRowArray, 150, 100), 0 == isCrabStillAnimating && positionSeaAnimals(crabArray, numberOfCrabInEachRowArray, 100, 100), 0 == isTurtleStillAnimating && positionSeaAnimals(turtleArray, numberOfTurtleInEachRowArray, 150, 100), positionNbaElements(), positionExperience1Elements(), positionExperience2Elements(), positionExperience3Elements(), positionExperienceTextContainer(), positionChainBlockAndStringContainer(), resetFireworkSvg()
}

function initTouchEvents() {
    document.addEventListener("touchstart", handleStart, !1), document.addEventListener("touchmove", handleMove, !1), document.addEventListener("touchend", handleEnd, !1)
}

function handleStart(e) {
    touchStartX = e.targetTouches[0].pageX, pageVerticalPositionOnTouch = pageVerticalPosition
}

function handleMove(e) {
    e.preventDefault(), touchCurrentX = e.targetTouches[0].pageX, 1 == canScrollOrSwipe && (detectPageVerticalPosition(), runTheseFunctionsAfterScrollOrSwipe())
}

function handleEnd(e) {
    e.preventDefault(), touchEndX = e.changedTouches[0].pageX
}

function runTheseFunctionsAfterScrollOrSwipe() {
    orientMari(), checkMariJumpFallSwim(), moveLayers(), shiftUpDownHorizontalLayers(), animateInformationAndEnemiesElements(), animateMariRunSwim(), hideScrollOrSwipeTextContainer(), deviceFunctionScrollSwipe(), printScrollSwipeText()
}

function deviceFunctionScrollSwipe() {
    "computer" != deviceName && "vertical" == layersMovement && positionHorizontalLayersToHaveSameRightPosition()
}

function showContainer() {
    containerDiv.setAttribute("class", "");
}

function shiftUpHorizontalLayersAfterEverythingLoaded() {
    for (var e = 0; e < layerHorizontalArray.length; e++) $(layerHorizontalArray[e]).stop().animate({
        top: "0px"
    }, 1e3, function() {
        finishShiftUpHorizontalLayersAfterEverythingLoaded()
    })
}

function finishShiftUpHorizontalLayersAfterEverythingLoaded() {
    1 == canFinishShiftUpHorizontalLayersAfterEverythingLoaded && (isPreloadShiftUpAnimationFinish = !(canFinishShiftUpHorizontalLayersAfterEverythingLoaded = !1), makePageScrollable(), shiftDownMariContainer(), animateScrollOrSwipeTextContainer())
}

function shiftDownMariContainer() {
    setMariJumpDownAndFallFrame(), $(mariContainerDiv).stop().animate({
        bottom: "20%"
    }, 500, function() {
        setMariStaticFrame(), enableAnimateMariRunSwim()
    }), "internet explorer" == browserName && browserVersion <= 8 && enableAnimateMariRunSwim()
}

function makePageScrollable() {
    contentDiv.setAttribute("class", ""), enableScrollOrSwipe()
}

function setFrontLayerVerticalHeight() {
    layerVerticalArray[layerVerticalArray.length - 1].style.height = 2 * containerDiv.offsetHeight + bannersContainerDiv.offsetHeight + gapBetweenContactCloudAndBannersContainer + "px"
}

function setBannersContainerVerticalPosition() {
    bannersContainerDiv.style.bottom = containerDiv.offsetHeight + "px"
}

function setPageHeight() {
    pageDiv.style.height = layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth + layerVerticalArray[layerVerticalArray.length - 1].offsetHeight + distanceBetweenMariAndBalloon + "px"
}

function setLayerSpeed() {
    for (; 0 < layerHorizontalSpeedArray.length;) layerHorizontalSpeedArray.pop();
    for (; 0 < layerVerticalSpeedArray.length;) layerVerticalSpeedArray.pop();
    for (var e = 0; e < layerHorizontalArray.length; e++) {
        var t = (layerHorizontalArray[e].offsetWidth - containerDiv.offsetWidth) / (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth);
        layerHorizontalSpeedArray.push(t)
    }
    for (e = 0; e < layerVerticalArray.length; e++) {
        var i = (layerVerticalArray[e].offsetHeight - containerDiv.offsetHeight) / (layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight);
        layerVerticalSpeedArray.push(i)
    }
}

function detectPageVerticalPosition() {
    previousPageVerticalPosition = pageVerticalPosition, "computer" == deviceName ? pageVerticalPosition = "internet explorer" == browserName ? document.documentElement.scrollTop : pageYOffset : ((pageVerticalPosition = pageVerticalPositionOnTouch + (touchStartX - touchCurrentX)) < 0 && (pageVerticalPosition = 0), pageVerticalPosition > pageDiv.offsetHeight - containerDiv.offsetHeight && (pageVerticalPosition = pageDiv.offsetHeight - containerDiv.offsetHeight)), deltaPageVerticalPosition = pageVerticalPosition - previousPageVerticalPosition, pageVerticalPosition <= 0 && (resetVariables(), resetFunctions())
}

function moveLayers() {
    if (setLayersMovement(), "horizontal" == layersMovement) {
        for (var e = 0; e < layerHorizontalArray.length; e++) layerHorizontalArray[e].style.left = -1 * layerHorizontalSpeedArray[e] * pageVerticalPosition + "px";
        positionLayerHorizontalToBottom(), clearHappyMariTimer(), positionVerticalLayersHorizontally()
    }
    if ("vertical" == layersMovement) {
        for (e = 0; e < layerVerticalArray.length; e++) layerVerticalArray[e].style.bottom = -1 * layerVerticalSpeedArray[e] * (pageVerticalPosition - (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth)) + "px";
        positionVerticalLayersAtLeftMost(), positionHorizontalLayersToHaveSameRightPosition(), positionHorizontalLayersVertically(), clearShiftMariFrameTimer(), clearHappyMariTimer()
    }
    "not moving 1" == layersMovement && (positionVerticalLayersAtLeftMost(), positionVerticalLayersToHaveSameTopPosition(), positionHorizontalLayersAtBottomMost(), positionHorizontalLayersToHaveSameRightPosition(), clearHappyMariTimer()), "not moving 2" == layersMovement && (positionVerticalLayersAtLeftMost(), positionVerticalLayersToHaveSameTopPosition(), positionHorizontalLayersAtBottomMost(), positionHorizontalLayersToHaveSameRightPosition(), happyMari(), drawManyFireworks()), positionBalloonAndMariContainerHorizontally(), positionContactContainer(), positionFireworksContainer()
}

function positionVerticalLayersAtLeftMost() {
    for (var e = 0; e < layerVerticalArray.length; e++) layerVerticalArray[e].style.left = "0px"
}

function positionHorizontalLayersToHaveSameRightPosition() {
    for (var e = 0; e < layerHorizontalArray.length; e++) layerHorizontalArray[e].style.left = containerDiv.offsetWidth - layerHorizontalArray[e].offsetWidth + "px"
}

function positionHorizontalLayersVertically() {
    for (var e = 0; e < layerHorizontalArray.length; e++) layerHorizontalArray[e].style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight + "px"
}

function positionHorizontalLayersAtBottomMost() {
    for (var e = 0; e < layerHorizontalArray.length; e++) layerHorizontalArray[e].style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight + "px"
}

function setMariLeftAndRightEdge() {
    mariRightEdge = .5 * (containerDiv.offsetWidth + mariDiv.offsetWidth) - 65, mariLeftEdge = .5 * (containerDiv.offsetWidth - mariDiv.offsetWidth) + 65
}

function positionVerticalLayersToHaveSameTopPosition() {
    for (var e = 0; e < layerVerticalArray.length; e++) layerVerticalArray[e].style.bottom = containerDiv.offsetHeight - layerVerticalArray[e].offsetHeight + "px"
}

function positionVerticalLayersBottomToHorizontalLayersBottom() {
    for (var e = 0; e < layerVerticalArray.length; e++) layerVerticalArray[e].style.bottom = -1 * layerHorizontalArray[e].offsetTop + "px"
}

function shiftUpDownHorizontalLayers() {
    (previousPageVerticalPosition < sea1Div.offsetLeft - mariLeftEdge || previousPageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - mariRightEdge) && pageVerticalPosition >= sea1Div.offsetLeft - mariLeftEdge && pageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - mariRightEdge && (isMariSwimming = !0, shiftUpLayerHorizontal(), shiftMariToSeaFloor(), createBubble()), previousPageVerticalPosition >= sea1Div.offsetLeft - mariLeftEdge && previousPageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - mariRightEdge && (pageVerticalPosition < sea1Div.offsetLeft - mariLeftEdge || pageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - mariRightEdge) && (isMariSwimming = !1, shiftDownLayerHorizontal(), shiftMariToGroundLevel(), clearInterval(bubbleTimer), clearInterval(blinkSeaAnimalsTimer))
}

function shiftUpDownHorizontalLayersOnResize() {
    pageVerticalPosition >= sea1Div.offsetLeft - mariLeftEdge && pageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - mariRightEdge && (clearInterval(shiftUpLayerHorizontalTimer), clearInterval(shiftDownLayerHorizontalTimer), isMariSwimming = !0, positionLayerHorizontalToTop(), positionVerticalLayersBottomToHorizontalLayersBottom(), createBubble()), (pageVerticalPosition < sea1Div.offsetLeft - mariLeftEdge || pageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - mariRightEdge) && (clearInterval(shiftUpLayerHorizontalTimer), clearInterval(shiftDownLayerHorizontalTimer), isMariSwimming = !1, "horizontal" == layersMovement ? (positionLayerHorizontalToBottom(), positionVerticalLayersBottomToHorizontalLayersBottom()) : (positionHorizontalLayersAtBottomMost(), positionHorizontalLayersToHaveSameRightPosition()), clearInterval(bubbleTimer), clearInterval(blinkSeaAnimalsTimer))
}

function setShiftUpLayerHorizontalDistance() {
    shiftUpLayerHorizontalDistance = .75 * containerDiv.offsetHeight
}

function shiftUpLayerHorizontal() {
    setShiftUpLayerHorizontalDistance(), clearShiftUpDownLayerHorizontalTimer(), shiftUpLayerHorizontalTimer = setInterval(function() {
        moveUpLayerHorizontal()
    }, shiftUpDownLayerHorizontalInterval), disableIsMariJumpingAndFalling()
}

function moveUpLayerHorizontal() {
    if ("horizontal" == layersMovement) {
        for (var e = 0; e < layerHorizontalArray.length; e++) {
            var t = layerHorizontalArray[e].offsetTop - shiftUpDownLayerHorizontalIncrement;
            t <= -shiftUpLayerHorizontalDistance ? (t = -shiftUpLayerHorizontalDistance, layerHorizontalArray[e].style.top = t + "px", clearInterval(shiftUpLayerHorizontalTimer)) : layerHorizontalArray[e].style.top = t + "px", mariContainerDiv.offsetTop > sea1Div.offsetTop + layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop && (isMariBelowSeaLevel = !0)
        }
        positionVerticalLayersBottomToHorizontalLayersBottom()
    } else clearInterval(shiftUpLayerHorizontalTimer), positionHorizontalLayersAtBottomMost(), positionHorizontalLayersToHaveSameRightPosition(), isMariBelowSeaLevel = !1
}

function shiftDownLayerHorizontal() {
    clearShiftUpDownLayerHorizontalTimer(), shiftDownLayerHorizontalTimer = setInterval(function() {
        moveDownLayerHorizontal()
    }, shiftUpDownLayerHorizontalInterval)
}

function moveDownLayerHorizontal() {
    if ("horizontal" == layersMovement) {
        for (var e = 0; e < layerHorizontalArray.length; e++) {
            var t = layerHorizontalArray[e].offsetTop + shiftUpDownLayerHorizontalIncrement;
            0 <= t ? (t = 0, layerHorizontalArray[e].style.top = t + "px", clearInterval(shiftDownLayerHorizontalTimer)) : layerHorizontalArray[e].style.top = t + "px", mariContainerDiv.offsetTop < sea1Div.offsetTop + layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop && (isMariBelowSeaLevel = !1)
        }
        positionVerticalLayersBottomToHorizontalLayersBottom()
    } else clearInterval(shiftDownLayerHorizontalTimer), positionHorizontalLayersAtBottomMost(), positionHorizontalLayersToHaveSameRightPosition(), isMariBelowSeaLevel = !1
}

function clearShiftUpDownLayerHorizontalTimer() {
    clearInterval(shiftUpLayerHorizontalTimer), clearInterval(shiftDownLayerHorizontalTimer)
}

function shiftMariToGroundLevel() {
    $(mariContainerDiv).stop().animate({
        bottom: containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop + "px"
    }, 300, function() {})
}

function shiftMariToSeaFloor() {
    $(mariContainerDiv).stop().animate({
        bottom: seaFloorDiv.offsetHeight + "px"
    }, 300, function() {})
}

function positionLayerHorizontalToTop() {
    if (1 == isMariSwimming) {
        setShiftUpLayerHorizontalDistance();
        for (var e = 0; e < layerHorizontalArray.length; e++) layerHorizontalArray[e].style.top = -shiftUpLayerHorizontalDistance + "px";
        for (e = 0; e < layerVerticalArray.length; e++) layerVerticalArray[e].style.bottom = shiftUpLayerHorizontalDistance + "px"
    }
}

function positionLayerHorizontalToBottom() {
    if (0 == isMariSwimming) {
        for (var e = 0; e < layerHorizontalArray.length; e++) layerHorizontalArray[e].style.top = "0px";
        for (e = 0; e < layerVerticalArray.length; e++) layerVerticalArray[e].style.bottom = "0px"
    }
}

function checkMariJumpFallSwim() {
    if ("horizontal" == layersMovement)
        if (1 == isMariSwimming) 1 == isMariBelowSeaLevel && mariSwimUp();
        else
            for (var e = 0; e < elevationArray.length; e++) mariJumpUp(e), mariFall(e)
}

function mariJumpUp(e) {
    (previousPageVerticalPosition <= elevationArray[e].offsetLeft - mariRightEdge && pageVerticalPosition > elevationArray[e].offsetLeft - mariRightEdge || previousPageVerticalPosition >= elevationArray[e].offsetLeft + elevationArray[e].offsetWidth - mariLeftEdge && pageVerticalPosition < elevationArray[e].offsetLeft + elevationArray[e].offsetWidth - mariLeftEdge) && (positionMariAtGroundLevel(), $(mariContainerDiv).stop().animate({
        bottom: [containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop + 300, "easeOutCubic"]
    }, 300, function() {
        mariJumpDown(e)
    }), setMariJumpUpFrame())
}

function mariJumpDown(e) {
    pageVerticalPosition > elevationArray[e].offsetLeft - mariRightEdge && pageVerticalPosition < elevationArray[e].offsetLeft + elevationArray[e].offsetWidth - mariLeftEdge && ($(mariContainerDiv).stop().animate({
        bottom: [containerDiv.offsetHeight - elevationArray[e].offsetTop, "easeInCubic"]
    }, 300, function() {
        disableIsMariJumpingAndFalling(), setMariStaticFrame()
    }), setMariJumpDownAndFallFrame())
}

function mariFall(e) {
    (previousPageVerticalPosition < elevationArray[e].offsetLeft + elevationArray[e].offsetWidth - mariLeftEdge && pageVerticalPosition >= elevationArray[e].offsetLeft + elevationArray[e].offsetWidth - mariLeftEdge || previousPageVerticalPosition > elevationArray[e].offsetLeft - mariRightEdge && pageVerticalPosition <= elevationArray[e].offsetLeft - mariRightEdge) && (isMariFalling = !0, setMariJumpDownAndFallFrame(), $(mariContainerDiv).stop().animate({
        bottom: [containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop, "easeInCubic"]
    }, 300, function() {
        disableIsMariJumpingAndFalling(), setMariStaticFrame()
    }))
}

function setMariJumpUpFrame() {
    clearShiftMariFrameTimer(), isMariJumping = !0, mariFramesDiv.style.left = -1 * mariStartJumpFrame * mariOneFrameWidth + "px"
}

function setMariJumpDownAndFallFrame() {
    mariFramesDiv.style.left = -1 * mariStopJumpFrame * mariOneFrameWidth + "px"
}

function setMariStaticFrame() {
    mariFramesDiv.style.left = "0px"
}

function disableIsMariJumpingAndFalling() {
    isMariFalling = isMariJumping = !1
}

function mariSwimUp() {
    if (getSwimUpHeight(), 0 < swimUpHeight) {
        var e = seaFloorDiv.offsetHeight + swimUpHeight + "px",
            t = 3 * swimUpHeight,
            i = 6 * swimUpHeight;
        $(mariContainerDiv).stop().animate({
            bottom: e
        }, t, function() {
            mariSwimDown(i)
        })
    }
}

function mariSwimDown(e) {
    $(mariContainerDiv).stop().animate({
        bottom: seaFloorDiv.offsetHeight + "px"
    }, e, function() {
        setMariStaticFrame()
    }), mariContainerDiv.offsetTop + mariContainerDiv.offsetHeight <= containerDiv.offsetHeight - seaFloorDiv.offsetHeight - minimumVerticalDistanceToTriggerMariSwimDownFrame ? mariFramesDiv.style.left = -1 * mariSwimDownFrame * mariOneFrameWidth + "px" : setMariStaticFrame()
}

function animateMariEyes() {
    clearInterval(blinkMariEyesTimer), blinkMariEyesTimer = setInterval(function() {
        blinkMariEyes()
    }, 4e3)
}

function blinkMariEyes() {
    "not moving 2" != layersMovement && ($(mariEyesCloseDiv).fadeTo(0, 1), $(mariEyesCloseDiv).stop().delay(300).animate({
        opacity: 0
    }, 0, function() {}))
}

function hideMariEyesClose() {
    $(mariEyesCloseDiv).fadeTo(0, 0)
}

function getSwimUpHeight() {
    swimUpHeight = Math.abs(deltaPageVerticalPosition);
    var e = sea1Div.offsetHeight - mariDiv.offsetHeight;
    e < swimUpHeight && (swimUpHeight = e)
}

function positionVerticalLayersHorizontally() {
    for (var e = 0; e < layerVerticalArray.length; e++) layerVerticalArray[e].style.left = layerHorizontalArray[e].offsetLeft + layerHorizontalArray[e].offsetWidth - containerDiv.offsetWidth + "px"
}

function positionBalloonAndMariContainerHorizontally() {
    var e = pageVerticalPosition * layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1] - (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth);
    mariMaxHorizontalDistance = .5 * containerDiv.offsetWidth + 0;
    var t = .5 * containerDiv.offsetWidth + e;
    mariMaxHorizontalDistance <= t && (t = mariMaxHorizontalDistance);
    var i = .5 * containerDiv.offsetWidth - 200,
        n = .5 * (containerDiv.offsetWidth - balloonDiv.offsetWidth) + e;
    i <= n && (n = i), "vertical" == layersMovement ? (balloonDiv.style.left = n + "px", mariContainerDiv.style.left = t + "px", mariContainerDiv.classList.add("marismoving")) : "not moving 1" == layersMovement || "not moving 2" == layersMovement ? (mariContainerDiv.style.left = t + pageVerticalPosition - (pageDiv.offsetHeight - containerDiv.offsetHeight - distanceBetweenMariAndBalloon) + "px", balloonDiv.style.left = n + "px") : (balloonDiv.style.left = layerHorizontalArray[layerHorizontalArray.length - 1].offsetLeft + layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - .5 * (containerDiv.offsetWidth + balloonDiv.offsetWidth) + "px", mariContainerDiv.style.left = "50%", mariContainerDiv.classList.remove("marismoving"));
}

function positionBalloonVertically() {
    balloonDiv.style.bottom = .2 * containerDiv.offsetHeight + "px";
}

function setLayersMovement() {
    layersMovement = pageVerticalPosition * layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1] <= layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth ? "horizontal" : pageVerticalPosition >= pageDiv.offsetHeight - containerDiv.offsetHeight - distanceBetweenMariAndBalloon && pageVerticalPosition < pageDiv.offsetHeight - containerDiv.offsetHeight ? "not moving 1" : pageVerticalPosition >= pageDiv.offsetHeight - containerDiv.offsetHeight ? "not moving 2" : "vertical";
    mariContainerDiv.classList.remove("marismoving");
}

function orientMari() {
    0 < deltaPageVerticalPosition && (mariFramesDiv.style.top = "10px", mariEyesCloseDiv.style.left = "90px"), deltaPageVerticalPosition < 0 && (mariFramesDiv.style.top = "-215px", mariEyesCloseDiv.style.left = "57px")
}

function storeDivs() {
    for (var e = document.getElementsByTagName("div"), t = 0; t < e.length; t++) "fish" == e[t].getAttribute("class") && fishArray.push(e[t]), "fish-eyes" == e[t].getAttribute("class") && fishEyeArray.push(e[t]), "crab" == e[t].getAttribute("class") && crabArray.push(e[t]), "crab-eyes" == e[t].getAttribute("class") && crabEyeArray.push(e[t]), "turtle" == e[t].getAttribute("class") && turtleArray.push(e[t]), "turtle-eyes" == e[t].getAttribute("class") && turtleEyeArray.push(e[t]), ("urmah-board-blue" == e[t].getAttribute("class") || "urmah-board-red" == e[t].getAttribute("class")) && urmahBoardArray.push(e[t]), "elevation" == e[t].getAttribute("class") && elevationArray.push(e[t]), "cic" == e[t].getAttribute("class") && cicArray.push(e[t]), "pod" == e[t].getAttribute("class") && podArray.push(e[t]), ("pod-leg-frame-a" == e[t].getAttribute("class") || "pod-leg-frame-b" == e[t].getAttribute("class")) && podLegFrameArray.push(e[t]), ("pod-leg-container-a" == e[t].getAttribute("class") || "pod-leg-container-b" == e[t].getAttribute("class")) && podLegContainerArray.push(e[t]), "experience-text-container" == e[t].getAttribute("class") && experienceTextContainerArray.push(e[t]), "chain-block-and-string-container" == e[t].getAttribute("class") && chainBlockAndStringContainerArray.push(e[t]), "layer-horizontal" == e[t].getAttribute("class") && layerHorizontalArray.push(e[t]), "layer-vertical" == e[t].getAttribute("class") && layerVerticalArray.push(e[t]), ("algae-a" == e[t].getAttribute("class") || "algae-b" == e[t].getAttribute("class") || "birthday-cake-class" == e[t].getAttribute("class")) && seaFloorFrontObjectArray.push(e[t]), ("coral" == e[t].getAttribute("class") || "coral-big" == e[t].getAttribute("class")) && seaFloorBackObjectArray.push(e[t]), "squid-hand-close" == e[t].getAttribute("class") && squidHandCloseArray.push(e[t]), "squid-hand-open" == e[t].getAttribute("class") && squidHandOpenArray.push(e[t]), "firework" == e[t].getAttribute("class") && fireworkArray.push(e[t])
}

function animatePlants() {
    for (var e = 0; e < cicArray.length; e++) $(cicArray[e]).stop().delay(300 * e).animate({
        top: [cicTargetTopObjectArray[e].offsetTop, "easeOutElastic"]
    }, 800, function() {})
}

function positionPlants() {
    for (var e = 0; e < cicArray.length; e++) cicArray[e].style.top = 1 == canAnimatePlantInformation ? "100%" : cicTargetTopObjectArray[e].offsetTop + "px"
}

function animatePods() {
    clearInterval(podLegsTimer), podLegsTimer = setInterval(function() {
        animatePodsLegs()
    }, 200);
    for (var e = 0; e < podArray.length; e++) $(podArray[e]).stop().delay(300 * e).animate({
        left: [podTargetLeftArray[e], "easeOutCubic"]
    }, 1e3, function() {})
}

function animatePodsLegs() {
    podCounter += 1;
    for (var e = 0; e < podArray.length; e++) {
        if (podArray[podArray.length - 1].offsetLeft == podTargetLeftArray[podTargetLeftArray.length - 1]) return podLegFrameArray[podLegFrameArray.length - 1].style.left = "0px", clearInterval(podLegsTimer), void(podCounter = 0);
        podArray[e].offsetLeft > podTargetLeftArray[e] && podArray[e].offsetLeft < podEarlyPositionArray[e] ? podLegFrameArray[e].style.left = -1 * podLegContainerArray[e].offsetWidth * (podCounter % 2) + "px" : podLegFrameArray[e].style.left = "0px"
    }
}

function animatePodsEyes() {
    clearInterval(podBlinkTimer), podBlinkTimer = setInterval(function() {
        blinkPods()
    }, 4e3)
}

function blinkPods() {
    if (pageVerticalPosition + .5 * containerDiv.offsetWidth < about2ContainerDiv.offsetLeft || pageVerticalPosition + .5 * containerDiv.offsetWidth > about2ContainerDiv.offsetLeft + about2ContainerDiv.offsetWidth) clearInterval(podBlinkTimer);
    else {
        var e = Math.floor(Math.random() * podArray.length);
        $(podEnemyFaceEyeArray[e]).fadeTo(0, 1), $(podEnemyFaceEyeArray[e]).stop().delay(300).animate({
            opacity: 0
        }, 0, function() {})
    }
}

function positionPods() {
    for (var e = 0; e < podArray.length; e++) podArray[e].style.left = podEarlyPositionArray[e] + "px"
}

function urmahBoardsJump() {
    for (var e = 0; e < urmahBoardArray.length; e++) $(urmahBoardArray[e]).stop().delay(100 * e).animate({
        bottom: [200, "easeOutCubic"]
    }, 300, function() {
        urmahBoardsFall()
    })
}

function urmahBoardsFall() {
    $(urmahBoardArray[urmahBoardsCounter]).stop().animate({
        bottom: [0, "easeInCubic"]
    }, 300, function() {}), (urmahBoardsCounter += 1) >= urmahBoardArray.length && (urmahBoardsCounter = 0)
}

function positionNbaBoard() {
    for (var e = 0; e < urmahBoardArray.length; e++) urmahBoardArray[e].style.bottom = "0px"
}

function animateNbaBoardsContinuously() {
    clearInterval(urmahBoardsAnimationTimer), urmahBoardsAnimationTimer = setInterval(function() {
        urmahBoardsJump()
    }, 3e3)
}

function animateNbaPlayer() {
    urmahPlayerRun()
}

function urmahPlayerRun() {
    clearInterval(urmahPlayerTimer), urmahPlayerTimer = setInterval(function() {
        animateNbaPlayerRun()
    }, 200), $(urmahPlayerContainerDiv).stop().animate({
        left: "690px"
    }, 1e3, function() {
        urmahPlayerJump()
    })
}

function animateNbaPlayerRun() {
    shiftNbaPlayerFrame((urmahPlayerCounter += 1) % 2)
}

function urmahPlayerJump() {
    clearInterval(urmahPlayerTimer), urmahPlayerCounter = 0, shiftNbaPlayerFrame(2), $(urmahPlayerContainerDiv).stop().animate({
        left: "570px",
        bottom: [200, "easeOutCubic"]
    }, 300, function() {
        urmahPlayerFall()
    })
}

function urmahPlayerFall() {
    shiftNbaPlayerFrame(3), shakeRim(), bounceBall(), urmahBoardsJump(), animateNbaBoardsContinuously(), $(urmahPlayerContainerDiv).stop().animate({
        left: "450px",
        bottom: [0, "easeInCubic"]
    }, 300, function() {})
}

function shiftNbaPlayerFrame(e) {
    urmahPlayerFrameDiv.style.left = -300 * e + "px"
}

function shakeRim() {
    $(urmahRimContainerDiv).stop().animate({
        bottom: [-50, "easeOutCubic"]
    }, 100, function() {
        moveRimUp()
    })
}

function moveRimUp() {
    $(urmahRimContainerDiv).stop().animate({
        bottom: [0, "easeOutElastic"]
    }, 500, function() {})
}

function bounceBall() {
    urmahBallDiv.style.opacity = "1", $(urmahBallDiv).stop().animate({
        bottom: [0, "easeOutBounce"]
    }, 1200, function() {})
}

function positionNbaElements() {
    stopAllNbaAnimation(), setAllNbaCounter(), clearAllNbaTimer(), positionNbaBoard(), positionNbaPlayerContainer(), hideNbaBall()
}

function positionNbaPlayerContainer() {
    urmahPlayerContainerDiv.style.left = "1400px", urmahPlayerContainerDiv.style.bottom = "0px"
}

function hideNbaBall() {
    $(urmahBallDiv).fadeTo(0, 0), urmahBallDiv.style.left = "415px", urmahBallDiv.style.bottom = "250px"
}

function animateNbaPlayerEyes() {
    
}

function clearAllNbaTimer() {
    
}

function setAllNbaCounter() {
    urmahPlayerCounter = urmahBoardsCounter = 0
}

function stopAllNbaAnimation() {
    for (var e = 0; e < urmahBoardArray.length; e++) $(urmahBoardArray[e]).stop(!0, !1);
    $(urmahPlayerContainerDiv).stop(!0, !1)
}

function positionSeaAnimals(e, t, i, n) {
    for (var a = e, o = t, r = i, l = n, s = 0, c = 0; c < o.length; c++)
        for (var f = 0; f < o[c]; f++) a[s].style.left = seaAnimalSwimDistance + f * r + "px", a[s].style.top = c * l + "px", s += 1
}

function animateSeaAnimals(e) {
    var t = e;
    t == fishArray && (isFishStillAnimating = !0), t == crabArray && (isCrabStillAnimating = !0), t == turtleArray && (isTurtleStillAnimating = !0);
    for (var i = 0; i < t.length; i++) $(t[i]).stop().delay(150 * i).animate({
        left: [t[i].offsetLeft - seaAnimalSwimDistance, "easeOutCubic"]
    }, 600, function() {
        disableIsSeaAnimalStillAnimating(t)
    })
}

function disableIsSeaAnimalStillAnimating(e) {
    var t = e;
    t == fishArray && (fishAnimateNumber >= t.length - 1 ? (isFishStillAnimating = !1, fishAnimateNumber = 0) : fishAnimateNumber += 1), t == crabArray && (crabAnimateNumber >= t.length - 1 ? (isCrabStillAnimating = !1, crabAnimateNumber = 0) : crabAnimateNumber += 1), t == turtleArray && (turtleAnimateNumber >= t.length - 1 ? (isTurtleStillAnimating = !1, turtleAnimateNumber = 0) : turtleAnimateNumber += 1)
}

function animateMariRunSwim() {
    1 == canAnimateMariRunSwim && 0 == isMariJumping && 0 == isMariFalling && "vertical" != layersMovement && (disableAnimateMariRunSwim(), clearInterval(shiftMariFrameTimer), shiftMariFrameTimer = setInterval(function() {
        shiftMariFrame()
    }, shiftMariFrameTimeInterval))
}

function shiftMariFrame() {
    if (1 == isMariFalling) return clearShiftMariFrameTimer(), void setMariJumpDownAndFallFrame();
    if (1 == isMariSwimming && 1 == isMariBelowSeaLevel ? (mariStartFrame = mariStartSwimFrame, mariStopFrame = mariStopSwimFrame) : (mariStartFrame = mariStartRunFrame, mariStopFrame = mariStopRunFrame), mariFramesDiv.style.left = -1 * mariOneFrameWidth * (mariStartFrame + counter) + "px", mariStopFrame < mariStartFrame + counter + switcher && (switcher *= -1), mariStartFrame + counter + switcher == mariStartFrame && (pageVerticalPositionWhenAnimateMari1 = pageVerticalPosition), mariStartFrame + counter + switcher < mariStartFrame) {
        if (pageVerticalPositionWhenAnimateMari1 == (pageVerticalPositionWhenAnimateMari2 = pageVerticalPosition)) return clearShiftMariFrameTimer(), void("not moving 2" == layersMovement && mariHandsUp());
        switcher *= -1
    }
    counter += switcher
}

function clearShiftMariFrameTimer() {
    clearInterval(shiftMariFrameTimer), (0 == isMariSwimming || 1 == isMariSwimming && mariContainerDiv.offsetTop + mariContainerDiv.offsetHeight >= containerDiv.offsetHeight - seaFloorDiv.offsetHeight) && setMariStaticFrame(), counter = 0, switcher = 1, enableAnimateMariRunSwim()
}

function enableAnimateMariRunSwim() {
    canAnimateMariRunSwim = !0
}

function disableAnimateMariRunSwim() {
    canAnimateMariRunSwim = !1
}

function positionChainBlockAndStringContainer() {
    for (var e = 0; e < chainBlockAndStringContainerArray.length; e++) 0 == e && (canAnimateBossInformation = canAnimateRobotInformation), 1 == e && (canAnimateBossInformation = canAnimateSquidInformation), 2 == e && (canAnimateBossInformation = canAnimateAlienInformation), chainBlockAndStringContainerArray[e].style.left = .5 * experienceTextContainerArray[e].offsetWidth - .5 * chainBlockAndStringContainerArray[e].offsetWidth + "px", chainBlockAndStringContainerArray[e].style.bottom = 1 == canAnimateBossInformation ? .8 * containerDiv.offsetHeight + experienceTextContainerArray[e].offsetHeight + "px" : experienceTextContainerDistanceFromFloor + experienceTextContainerArray[e].offsetHeight + "px"
}

function animateChainBlockAndStringContainer(e) {
    $(chainBlockAndStringContainerArray[e]).stop().animate({
        bottom: [experienceTextContainerDistanceFromFloor + experienceTextContainerArray[e].offsetHeight, "easeOutCubic"]
    }, 1e3, function() {})
}

function positionExperienceTextContainer() {
    for (var e = 0; e < experienceTextContainerArray.length; e++) 0 == e && (canAnimateBossInformation = canAnimateRobotInformation), 1 == e && (canAnimateBossInformation = canAnimateSquidInformation), 2 == e && (canAnimateBossInformation = canAnimateAlienInformation), experienceTextContainerArray[e].style.bottom = 1 == canAnimateBossInformation ? .8 * containerDiv.offsetHeight + "px" : experienceTextContainerDistanceFromFloor + "px"
}

function animateExperienceTextContainer(e) {
    $(experienceTextContainerArray[e]).stop().animate({
        bottom: [experienceTextContainerDistanceFromFloor, "easeOutCubic"]
    }, 1e3, function() {})
}

function positionExperience1Elements() {
    robotDiv.style.left = experience1ContainerDiv.offsetWidth + "px", $(piechartRobotTextGraphic1Div).fadeTo(0, 0), $(piechartRobotTextGraphic2Div).fadeTo(0, 0), $(piechartRobotTextAnimation1Div).fadeTo(0, 0), $(piechartRobotTextAnimation2Div).fadeTo(0, 0), $(piechartRobotTextCode1Div).fadeTo(0, 0), $(piechartRobotTextCode2Div).fadeTo(0, 0), "internet explorer" == browserName && browserVersion <= 8 || $(piechartRobotFrontDiv).fadeTo(0, 0)
}

function positionExperience2Elements() {
    squidDiv.style.left = experience2ContainerDiv.offsetWidth + "px", $(piechartSquidTextGraphic1Div).fadeTo(0, 0), $(piechartSquidTextGraphic2Div).fadeTo(0, 0), $(piechartSquidTextAnimation1Div).fadeTo(0, 0), $(piechartSquidTextAnimation2Div).fadeTo(0, 0), $(piechartSquidTextCode1Div).fadeTo(0, 0), $(piechartSquidTextCode2Div).fadeTo(0, 0), "internet explorer" == browserName && browserVersion <= 8 || $(piechartSquidFrontDiv).fadeTo(0, 0)
}

function positionExperience3Elements() {
    alienDiv.style.left = experience3ContainerDiv.offsetWidth + "px", $(piechartAlienTextGraphic1Div).fadeTo(0, 0), $(piechartAlienTextGraphic2Div).fadeTo(0, 0), $(piechartAlienTextAnimation1Div).fadeTo(0, 0), $(piechartAlienTextAnimation2Div).fadeTo(0, 0), $(piechartAlienTextCode1Div).fadeTo(0, 0), $(piechartAlienTextCode2Div).fadeTo(0, 0), "internet explorer" == browserName && browserVersion <= 8 || $(piechartAlienFrontDiv).fadeTo(0, 0)
}

function animateInformationAndEnemiesElements() {
    if ("horizontal" == layersMovement) {
        if (0 == isMariSwimming)
            for (var e = 0; e < landInformationContainerArray.length; e++)(previousPageVerticalPosition + .5 * containerDiv.offsetWidth < landInformationContainerArray[e].offsetLeft || previousPageVerticalPosition + .5 * containerDiv.offsetWidth > landInformationContainerArray[e].offsetLeft + landInformationContainerArray[e].offsetWidth) && pageVerticalPosition + .5 * containerDiv.offsetWidth > landInformationContainerArray[e].offsetLeft && pageVerticalPosition + .5 * containerDiv.offsetWidth < landInformationContainerArray[e].offsetLeft + landInformationContainerArray[e].offsetWidth && (landInformationContainerArray[e] == about1ContainerDiv && 1 == canAnimatePlantInformation && (animatePlants(), canAnimatePlantInformation = !1), landInformationContainerArray[e] == about2ContainerDiv && (animatePodsEyes(), 1 == canAnimatePodInformation && (animatePods(), canAnimatePodInformation = !1)), landInformationContainerArray[e] == about3ContainerDiv && (animateNbaPlayerEyes(), 1 == canAnimateNbaInformation && (animateNbaPlayer(), canAnimateNbaInformation = !1)), landInformationContainerArray[e] == experience1ContainerDiv && (0 == canAnimateRobotInformation ? animateRobotHands() : (animateRobot(), animateExperienceTextContainer(0), animateChainBlockAndStringContainer(0), canAnimateRobotInformation = !1)), landInformationContainerArray[e] == experience2ContainerDiv && (0 == canAnimateSquidInformation ? animateSquidHands() : (animateSquid(), animateExperienceTextContainer(1), animateChainBlockAndStringContainer(1), canAnimateSquidInformation = !1)), landInformationContainerArray[e] == experience3ContainerDiv && (0 == canAnimateAlienInformation ? animateAlienHand() : (animateAlien(), animateExperienceTextContainer(2), animateChainBlockAndStringContainer(2), canAnimateAlienInformation = !1)));
        if (1 == isMariSwimming)
            for (e = 0; e < seaInformationContainerArray.length; e++)(previousPageVerticalPosition + .5 * containerDiv.offsetWidth < sea1Div.offsetLeft + seaInformationContainerArray[e].offsetLeft || previousPageVerticalPosition + .5 * containerDiv.offsetWidth > sea1Div.offsetLeft + seaInformationContainerArray[e].offsetLeft + seaInformationContainerArray[e].offsetWidth) && pageVerticalPosition + .5 * containerDiv.offsetWidth > sea1Div.offsetLeft + seaInformationContainerArray[e].offsetLeft && pageVerticalPosition + .5 * containerDiv.offsetWidth < sea1Div.offsetLeft + seaInformationContainerArray[e].offsetLeft + seaInformationContainerArray[e].offsetWidth && (seaInformationContainerArray[e] == skill1ContainerDiv && (makeSeaAnimalsBlinking(fishEyeArray), 1 == canAnimateFishInformation && (animateSeaAnimals(fishArray), canAnimateFishInformation = !1)), seaInformationContainerArray[e] == skill2ContainerDiv && (makeSeaAnimalsBlinking(crabEyeArray), 1 == canAnimateCrabInformation && (animateSeaAnimals(crabArray), canAnimateCrabInformation = !1)), seaInformationContainerArray[e] == skill3ContainerDiv && (makeSeaAnimalsBlinking(turtleEyeArray), 1 == canAnimateTurtleInformation && (animateSeaAnimals(turtleArray), canAnimateTurtleInformation = !1)))
    }
}

function animateRobot() {
    $(robotDiv).stop().animate({
        left: "420px"
    }, 1e3, function() {
        animatePiechartAolFront(), animateRobotHands()
    })
}

function animateRobotHands() {
    spinRobotHands(), clearInterval(animateRobotHandsTimer), animateRobotHandsTimer = setInterval(function() {
        spinRobotHands()
    }, 4e3)
}

function spinRobotHands() {
    clearInterval(spinRobotHandsTimer), spinRobotHandsTimer = setInterval(function() {
        changeRobotHands()
    }, 100)
}

function changeRobotHands() {
    if (robotHandChildrenLength <= changeRobotHandsCounter) changeRobotHandsCounter = 0, clearInterval(spinRobotHandsTimer), setRobotHandsToDefault(), (pageVerticalPosition + .5 * containerDiv.offsetWidth < experience1ContainerDiv.offsetLeft || pageVerticalPosition + .5 * containerDiv.offsetWidth > experience1ContainerDiv.offsetLeft + experience1ContainerDiv.offsetWidth) && clearInterval(animateRobotHandsTimer);
    else
        for (var e = 0; e < robotHandChildrenLength; e++) e == changeRobotHandsCounter ? setRobotHandsToOpaque(e) : setRobotHandsToTransparent(e);
    changeRobotHandsCounter += 1
}

function setRobotHandsToDefault() {
    for (var e = 0; e < robotHandChildrenLength; e++) 0 == e ? setRobotHandsToOpaque(e) : setRobotHandsToTransparent(e)
}

function setRobotHandsToOpaque(e) {
    robotHandLeftDiv.children[e].style.opacity = 1, robotHandLeftDiv.children[e].style.filter = "alpha(opacity=100)", robotHandRightDiv.children[e].style.opacity = 1, robotHandRightDiv.children[e].style.filter = "alpha(opacity=100)"
}

function setRobotHandsToTransparent(e) {
    robotHandLeftDiv.children[e].style.opacity = 0, robotHandLeftDiv.children[e].style.filter = "alpha(opacity=0)", robotHandRightDiv.children[e].style.opacity = 0, robotHandRightDiv.children[e].style.filter = "alpha(opacity=0)"
}

function animateSquid() {
    $(squidDiv).stop().animate({
        left: "430px"
    }, 1e3, function() {
        animatePiechartIncognitoFront(), animateSquidHands()
    })
}

function animateSquidHands() {
    moveSquidHands(), clearInterval(animateSquidHandsTimer), animateSquidHandsTimer = setInterval(function() {
        moveSquidHands()
    }, 4e3)
}

function moveSquidHands() {
    clearInterval(moveSquidHandsTimer), moveSquidHandsTimer = setInterval(function() {
        openAndCloseSquidHands()
    }, 200)
}

function openAndCloseSquidHands() {
    8 <= openAndCloseSquidHandsCounter ? (openAndCloseSquidHandsCounter = 0, clearInterval(moveSquidHandsTimer), openSquidHands(), (pageVerticalPosition + .5 * containerDiv.offsetWidth < experience2ContainerDiv.offsetLeft || pageVerticalPosition + .5 * containerDiv.offsetWidth > experience2ContainerDiv.offsetLeft + experience2ContainerDiv.offsetWidth) && clearInterval(animateSquidHandsTimer)) : openAndCloseSquidHandsCounter % 2 == 0 ? openSquidHands() : closeSquidHands(), openAndCloseSquidHandsCounter += 1
}

function openSquidHands() {
    for (var e = 0; e < squidHandOpenArray.length; e++) squidHandOpenArray[e].style.opacity = 1, squidHandOpenArray[e].style.filter = "alpha(opacity=100)";
    for (e = 0; e < squidHandCloseArray.length; e++) squidHandCloseArray[e].style.opacity = 0, squidHandCloseArray[e].style.filter = "alpha(opacity=0)"
}

function closeSquidHands() {
    for (var e = 0; e < squidHandOpenArray.length; e++) squidHandOpenArray[e].style.opacity = 0, squidHandOpenArray[e].style.filter = "alpha(opacity=0)";
    for (e = 0; e < squidHandCloseArray.length; e++) squidHandCloseArray[e].style.opacity = 1, squidHandCloseArray[e].style.filter = "alpha(opacity=100)"
}

function animateAlienHand() {
    clearInterval(animateAlienHandsTimer), animateAlienHandsTimer = setInterval(function() {
        rotateAlienHands()
    }, 100)
}

function rotateAlienHands() {
    (alienSteerPreviousAngle = alienSteerAngle) < (alienSteerAngle += alienSteerAngleIncrement) ? alienSteerAngleLimit < alienSteerAngle && (alienSteerAngleIncrement *= -1, alienSteerAngleLimit *= -1): alienSteerAngle < alienSteerAngleLimit && (alienSteerAngleIncrement *= -1, alienSteerAngleLimit *= -1), 0 == alienSteerAngle && (pageVerticalPosition + .5 * containerDiv.offsetWidth < experience3ContainerDiv.offsetLeft || pageVerticalPosition + .5 * containerDiv.offsetWidth > experience3ContainerDiv.offsetLeft + experience3ContainerDiv.offsetWidth) ? (clearInterval(animateAlienHandsTimer), alienSteerDiv.style.webkitTransform = "rotate(0deg)", alienSteerDiv.style.MozTransform = "rotate(0deg)", alienSteerDiv.style.OTransform = "rotate(0deg)", alienSteerDiv.style.msTransform = "rotate(0deg)", alienSteerDiv.style.transform = "rotate(0deg)") : (alienSteerDiv.style.webkitTransform = "rotate(" + alienSteerAngle + "deg)", alienSteerDiv.style.MozTransform = "rotate(" + alienSteerAngle + "deg)", alienSteerDiv.style.OTransform = "rotate(" + alienSteerAngle + "deg)", alienSteerDiv.style.msTransform = "rotate(" + alienSteerAngle + "deg)", alienSteerDiv.style.transform = "rotate(" + alienSteerAngle + "deg)")
}

function animateAlien() {
    $(alienDiv).stop().animate({
        left: "450px"
    }, 1e3, function() {
        animatePiechartFoxnewsFront(), animateAlienHand()
    })
}

function animatePiechartAolFront() {
    "internet explorer" == browserName && browserVersion <= 8 ? animatePiechartAolText() : $(piechartRobotFrontDiv).stop().animate({
        opacity: 1
    }, 500, function() {
        animatePiechartAolText()
    })
}

function animatePiechartIncognitoFront() {
    "internet explorer" == browserName && browserVersion <= 8 ? animatePiechartIncognitoText() : $(piechartSquidFrontDiv).stop().animate({
        opacity: 1
    }, 500, function() {
        animatePiechartIncognitoText()
    })
}

function animatePiechartFoxnewsFront() {
    "internet explorer" == browserName && browserVersion <= 8 ? animatePiechartFoxnewsText() : $(piechartAlienFrontDiv).stop().animate({
        opacity: 1
    }, 500, function() {
        animatePiechartFoxnewsText()
    })
}

function animatePiechartAolText() {
    animatePiechartAolTextCode(), animatePiechartAolTextGraphic(), animatePiechartAolTextAnimation()
}

function animatePiechartAolTextCode() {
    $(piechartRobotTextCode1Div).stop().animate({
        opacity: 1
    }, 1e3, function() {}), $(piechartRobotTextCode2Div).stop().animate({
        opacity: 1
    }, 1e3, function() {})
}

function animatePiechartAolTextGraphic() {
    $(piechartRobotTextGraphic1Div).stop().delay(300).animate({
        opacity: 1
    }, 1e3, function() {}), $(piechartRobotTextGraphic2Div).stop().delay(300).animate({
        opacity: 1
    }, 1e3, function() {})
}

function animatePiechartAolTextAnimation() {
    $(piechartRobotTextAnimation1Div).stop().delay(600).animate({
        opacity: 1
    }, 1e3, function() {}), $(piechartRobotTextAnimation2Div).stop().delay(600).animate({
        opacity: 1
    }, 1e3, function() {})
}

function animatePiechartIncognitoText() {
    animatePiechartIncognitoTextCode(), animatePiechartIncognitoTextAnimation(), animatePiechartIncognitoTextGraphic()
}

function animatePiechartIncognitoTextCode() {
    $(piechartSquidTextCode1Div).stop().animate({
        opacity: 1
    }, 1e3, function() {}), $(piechartSquidTextCode2Div).stop().animate({
        opacity: 1
    }, 1e3, function() {})
}

function animatePiechartIncognitoTextAnimation() {
    $(piechartSquidTextAnimation1Div).stop().delay(300).animate({
        opacity: 1
    }, 1e3, function() {}), $(piechartSquidTextAnimation2Div).stop().delay(300).animate({
        opacity: 1
    }, 1e3, function() {})
}

function animatePiechartIncognitoTextGraphic() {
    $(piechartSquidTextGraphic1Div).stop().delay(600).animate({
        opacity: 1
    }, 1e3, function() {}), $(piechartSquidTextGraphic2Div).stop().delay(600).animate({
        opacity: 1
    }, 1e3, function() {})
}

function animatePiechartFoxnewsText() {
    animatePiechartFoxnewsTextGraphic(), animatePiechartFoxnewsTextAnimation(), animatePiechartFoxnewsTextCode()
}

function animatePiechartFoxnewsTextCode() {
    $(piechartAlienTextCode1Div).stop().animate({
        opacity: 1
    }, 1e3, function() {}), $(piechartAlienTextCode2Div).stop().animate({
        opacity: 1
    }, 1e3, function() {})
}

function animatePiechartFoxnewsTextAnimation() {
    $(piechartAlienTextAnimation1Div).stop().delay(300).animate({
        opacity: 1
    }, 1e3, function() {}), $(piechartAlienTextAnimation2Div).stop().delay(300).animate({
        opacity: 1
    }, 1e3, function() {})
}

function animatePiechartFoxnewsTextGraphic() {
    $(piechartAlienTextGraphic1Div).stop().delay(600).animate({
        opacity: 1
    }, 1e3, function() {}), $(piechartAlienTextGraphic2Div).stop().delay(600).animate({
        opacity: 1
    }, 1e3, function() {})
}

function createBubble() {
    clearInterval(bubbleTimer), bubbleTimer = setInterval(function() {
        animateBubble()
    }, 3e3)
}

function animateBubble() {
    var e = mariContainerDiv.offsetTop - (sea1Div.offsetTop - shiftUpLayerHorizontalDistance);
    positionBubble(e), showBubble(), $(bubbleDiv).stop().animate({
        top: "0px"
    }, 2 * e, function() {
        hideBubble()
    })
}

function hideBubble() {
    $(bubbleDiv).fadeTo(0, 0)
}

function showBubble() {
    $(bubbleDiv).fadeTo(0, 1)
}

function positionBubble(e) {
    bubbleDiv.style.left = pageVerticalPosition + .5 * containerDiv.offsetWidth - sea1Div.offsetLeft + "px", bubbleDiv.style.top = e + "px"
}

function blinkSeaAnimals(e) {
    for (var t = e, i = new Array, n = Math.ceil(5 * Math.random()), a = 0; a < n; a++) {
        var o = Math.floor(Math.random() * e.length);
        i.push(t[o])
    }
    for (a = 0; a < i.length; a++) $(i[a]).fadeTo(0, 1), $(i[a]).stop().delay(300).animate({
        opacity: 0
    }, 0, function() {})
}

function makeSeaAnimalsBlinking(e) {
    clearInterval(blinkSeaAnimalsTimer), blinkSeaAnimalsTimer = setInterval(function() {
        blinkSeaAnimals(e)
    }, 3e3)
}

function positionContactContainer() {
    contactContainerDiv.style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + "px", contactContainerDiv.style.left = layerVerticalArray[layerVerticalArray.length - 1].offsetLeft + "px"
}

function positionFireworksContainer() {
    fireworksContainerDiv.style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + "px", fireworksContainerDiv.style.left = layerVerticalArray[layerVerticalArray.length - 1].offsetLeft + "px"
}

function happyMari() {
    0 == isMariHappy && (clearInterval(happyMariTimer), happyMariTimer = setInterval(function() {
        mariHandsUp()
    }, 3e3), isMariHappy = !0)
}

function clearHappyMariTimer() {
    1 == isMariHappy && (clearInterval(happyMariTimer), isMariHappy = !1)
}

function mariHandsUp() {
    mariFramesDiv.style.left = "-1600px", setTimeout(function() {
        setMariStaticFrame()
    }, 1e3)
}

function positionSplashContainer() {
    splashContainerDiv.style.left = .5 * (containerDiv.offsetWidth - splashContainerDiv.offsetWidth) + "px"
}

function positionMariContainerVertically() {
    1 == isPreloadShiftUpAnimationFinish && ($(mariContainerDiv).stop(!0, !1), setMariStaticFrame(), 1 == isMariSwimming ? positionMariAtSeaFloorLevel() : (checkElevationNumberBelowMari(), null != elevationNumberBelowMari ? mariContainerDiv.style.bottom = containerDiv.offsetHeight - elevationArray[elevationNumberBelowMari].offsetTop + "px" : positionMariAtGroundLevel()))
}

function positionMariAtGroundLevel() {
    mariContainerDiv.style.bottom = .2 * containerDiv.offsetHeight + "px"
}

function positionMariAtSeaFloorLevel() {
    mariContainerDiv.style.bottom = seaFloorDiv.offsetHeight + "px"
}

function checkElevationNumberBelowMari() {
    for (var e = 0; e < elevationArray.length; e++) {
        if (pageVerticalPosition < elevationArray[e].offsetLeft + elevationArray[e].offsetWidth - mariLeftEdge && pageVerticalPosition > elevationArray[e].offsetLeft - mariRightEdge) {
            elevationNumberBelowMari = e;
            break
        }
        elevationNumberBelowMari = null
    }
}

function animateWaterfall() {
    clearInterval(waterfallTimer), waterfallTimer = setInterval(function() {
        switchWaterfallTexture()
    }, 1e3)
}

function switchWaterfallTexture() {
    $(waterfall2Div).fadeTo(0, 0), $(waterfall2Div).stop().delay(500).animate({
        opacity: 1
    }, 0, function() {})
}

function positionSeaFloorObjectsVertically() {
    for (var e = 0; e < seaFloorFrontObjectArray.length; e++) seaFloorFrontObjectArray[e].offsetHeight > sea1Div.offsetHeight ? seaFloorFrontObjectArray[e].style.bottom = -1 * (seaFloorFrontObjectArray[e].offsetHeight - sea1Div.offsetHeight) + "px" : seaFloorFrontObjectArray[e].style.bottom = "0px";
    for (e = 0; e < seaFloorBackObjectArray.length; e++) seaFloorBackObjectArray[e].offsetHeight > sea1Div.offsetHeight ? seaFloorBackObjectArray[e].style.bottom = -.7 * containerDiv.offsetHeight - (seaFloorBackObjectArray[e].offsetHeight - sea1Div.offsetHeight) + "px" : seaFloorBackObjectArray[e].style.bottom = "-70%"
}

function animateScrollOrSwipeTextContainer() {
    1 == canAnimateScrollOrSwipeTextContainer && (canAnimateScrollOrSwipeTextContainer = !1, clearInterval(scrollOrSwipeTextContainerTimer), scrollOrSwipeTextContainerTimer = setInterval(function() {
        turnOnAndOffScrollOrSwipeTextContainer()
    }, 1e3))
}

function turnOnAndOffScrollOrSwipeTextContainer() {
    "computer" == deviceName ? ($(scrollOrSwipeTextContainer1Div).fadeTo(0, 1), $(scrollOrSwipeTextContainer1Div).stop().delay(500).animate({
        opacity: 0
    }, 0, function() {})) : ($(scrollOrSwipeTextContainer2Div).fadeTo(0, 1), $(scrollOrSwipeTextContainer2Div).stop().delay(500).animate({
        opacity: 0
    }, 0, function() {}))
}

function hideScrollOrSwipeTextContainer() {
    1 == canHideScrollOrSwipeTextContainer && (clearInterval(scrollOrSwipeTextContainerTimer), fadeOutScrollOrSwipeTextContainer(), canHideScrollOrSwipeTextContainer = !1)
}

function fadeOutScrollOrSwipeTextContainer() {
    $(scrollOrSwipeTextContainer1Div).fadeTo(0, 0), $(scrollOrSwipeTextContainer2Div).fadeTo(0, 0)
}

function clearAllInputField() {
    emailAddressDiv.value = "", emailSubjectDiv.value = "", emailMessageDiv.value = ""
}

function createFireworkSvg() {
    if (!("internet explorer" == browserName && browserVersion <= 8))
        for (var e = 0; e < fireworkArray.length; e++) {
            var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            t.setAttribute("version", "1.2"), t.setAttribute("baseProfile", "tiny"), t.setAttribute("width", "100%"), t.setAttribute("height", "100%"), fireworkSvgArray.push(t)
        }
}

function appendFireworkSvgToContainer() {
    if (!("internet explorer" == browserName && browserVersion <= 8))
        for (var e = 0; e < fireworkArray.length; e++) fireworkArray[e].appendChild(fireworkSvgArray[e])
}

function drawManyFireworks() {
    "internet explorer" == browserName && browserVersion <= 8 || 1 == canDrawManyFireworks && (clearInterval(drawFireworkTimer), drawFireworkTimer = setInterval(function() {
        drawFirework()
    }, 1e3), canDrawManyFireworks = !1)
}

function drawFirework() {
    drawFireworkCounter >= fireworkArray.length ? (drawFireworkCounter = 0, clearInterval(drawFireworkTimer)) : (clearInterval(drawOneLayerOfFireworkTimer), drawOneLayerOfFireworkTimer = setInterval(function() {
        drawOneLayerOfFirework()
    }, 40))
}

function drawOneLayerOfFirework() {
    if (fireworkLayerNumber < fireworkRowNumber) {
        fireworkLayerNumber += 1;
        for (var e = 0; e < fireworkColumnNumber; e++) {
            var t = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            t.setAttribute("cx", String(fireworkCenterX + Math.cos(e * fireworkOneRotationAngle) * (fireworkLayerNumber * fireworkOneRadiusDistance))), t.setAttribute("cy", String(fireworkCenterY + Math.sin(e * fireworkOneRotationAngle) * (fireworkLayerNumber * fireworkOneRadiusDistance))), t.setAttribute("r", fireworkDotRadius), t.setAttribute("fill", "#ffffff"), fireworkSvgArray[drawFireworkCounter].appendChild(t)
        }
    } else fireworkLayerNumber = 0, clearInterval(drawOneLayerOfFireworkTimer), makeFireworkDisappear(drawFireworkCounter), drawFireworkCounter += 1
}

function makeFireworkDisappear(e) {
    $(fireworkArray[e]).fadeTo(1e3, 0)
}

function resetFireworkSvg() {
    for (var e = 0; e < fireworkArray.length; e++) $(fireworkSvgArray[e]).empty(), $(fireworkArray[e]).fadeTo(0, 1)
}

function printResizeText() {}

function printScrollSwipeText() {}
var blinkMariEyesTimer, contentDiv = document.getElementById("content"),
    pageDiv = document.getElementById("page"),
    mariContainerDiv = document.getElementById("mari-container"),
    mariDiv = document.getElementById("mari"),
    mariFramesDiv = document.getElementById("mari-slides"),
    mariEyesCloseDiv = document.getElementById("mari-eyes-close"),
    bannersContainerDiv = document.getElementById("banners-container"),
    isPreloadShiftUpAnimationFinish = !1,
    canFinishShiftUpHorizontalLayersAfterEverythingLoaded = !0,
    splashContainerDiv = document.getElementById("splash-container"),
    balloonDiv = document.getElementById("balloon"),
    groundAndGrassContainer1Div = document.getElementById("ground-and-grass-container-1"),
    elevation1Div = document.getElementById("elevation-1"),
    elevation2Div = document.getElementById("elevation-2"),
    layerHorizontalArray = new Array,
    layerVerticalArray = new Array,
    gapBetweenContactCloudAndBannersContainer = 400,
    layerHorizontalSpeedArray = new Array,
    layerVerticalSpeedArray = new Array,
    sea1Div = document.getElementById("sea-1"),
    seaFloorDiv = document.getElementById("sea-floor"),
    seaFloorFrontObjectArray = new Array,
    seaFloorBackObjectArray = new Array,
    about1ContainerDiv = document.getElementById("cics-container"),
    cicLine1Div = document.getElementById("cic-line-1"),
    cicLine2Div = document.getElementById("cic-line-2"),
    cicArray = new Array,
    cicTargetTopObjectArray = new Array;
cicTargetTopObjectArray.push(cicLine1Div, cicLine1Div, cicLine2Div, cicLine2Div);
var canAnimatePlantInformation, about2ContainerDiv = document.getElementById("pods-container"),
    podTargetLeft1 = 0,
    podTargetLeft2 = 305,
    podTargetLeft3 = 710,
    podEarlyPosition1 = 795,
    podEarlyPosition2 = 1100,
    podEarlyPosition3 = 1505,
    podArray = new Array,
    podTargetLeftArray = new Array;
podTargetLeftArray.push(podTargetLeft1, podTargetLeft2, podTargetLeft3);
var podEarlyPositionArray = new Array;
podEarlyPositionArray.push(podEarlyPosition1, podEarlyPosition2, podEarlyPosition3);
var canAnimatePodInformation, podLegsTimer, podBlinkTimer, animateRobotHandsTimer, spinRobotHandsTimer, animateSquidHandsTimer, moveSquidHandsTimer, animateAlienHandsTimer, alienSteerPreviousAngle, canAnimateBossInformation, canAnimateRobotInformation, canAnimateSquidInformation, canAnimateAlienInformation, bubbleTimer, shiftUpLayerHorizontalDistance, shiftUpLayerHorizontalTimer, shiftDownLayerHorizontalTimer, blinkSeaAnimalsTimer, canAnimateFishInformation, podLegArray = new Array,
    podCounter = 0,
    podEnemyFaceEyeArray = new Array,
    podLegContainerArray = new Array,
    podLegContainer1Div = document.getElementById("pod-leg-container-1"),
    podLegContainer2Div = document.getElementById("pod-leg-container-2"),
    podLegContainer3Div = document.getElementById("pod-leg-container-3"),
    podLegFrameArray = new Array,
    pod1LegFrameDiv = document.getElementById("pod-1-leg-frame"),
    pod2LegFrameDiv = document.getElementById("pod-2-leg-frame"),
    pod3LegFrameDiv = document.getElementById("pod-3-leg-frame"),
    experience1ContainerDiv = document.getElementById("experience-1-container"),
    experience2ContainerDiv = document.getElementById("experience-2-container"),
    experience3ContainerDiv = document.getElementById("experience-3-container"),
    experienceTextContainerArray = new Array,
    chainBlockAndStringContainerArray = new Array,
    experienceTextContainerDistanceFromFloor = 185,
    robotDiv = document.getElementById("robot"),
    changeRobotHandsCounter = 0,
    robotHandLeftDiv = document.getElementById("robot-hand-left"),
    robotHandRightDiv = document.getElementById("robot-hand-right"),
    robotHandChildrenLength = $(robotHandLeftDiv).children().length,
    squidDiv = document.getElementById("squid"),
    squidHandCloseArray = new Array,
    squidHandOpenArray = new Array,
    openAndCloseSquidHandsCounter = 0,
    alienDiv = document.getElementById("alien"),
    alienSteerDiv = document.getElementById("alien-steer"),
    alienSteerAngle = 0,
    alienSteerAngleLimit = 15,
    alienSteerAngleIncrement = 5,
    piechartRobotFrontDiv = document.getElementById("piechart-robot-front"),
    piechartRobotTextGraphic1Div = document.getElementById("piechart-robot-text-graphic-1"),
    piechartRobotTextGraphic2Div = document.getElementById("piechart-robot-text-graphic-2"),
    piechartRobotTextAnimation1Div = document.getElementById("piechart-robot-text-animation-1"),
    piechartRobotTextAnimation2Div = document.getElementById("piechart-robot-text-animation-2"),
    piechartRobotTextCode1Div = document.getElementById("piechart-robot-text-code-1"),
    piechartRobotTextCode2Div = document.getElementById("piechart-robot-text-code-2"),
    piechartSquidFrontDiv = document.getElementById("piechart-squid-front"),
    piechartSquidTextGraphic1Div = document.getElementById("piechart-squid-text-graphic-1"),
    piechartSquidTextGraphic2Div = document.getElementById("piechart-squid-text-graphic-2"),
    piechartSquidTextAnimation1Div = document.getElementById("piechart-squid-text-animation-1"),
    piechartSquidTextAnimation2Div = document.getElementById("piechart-squid-text-animation-2"),
    piechartSquidTextCode1Div = document.getElementById("piechart-squid-text-code-1"),
    piechartSquidTextCode2Div = document.getElementById("piechart-squid-text-code-2"),
    piechartAlienFrontDiv = document.getElementById("piechart-alien-front"),
    piechartAlienTextGraphic1Div = document.getElementById("piechart-alien-text-graphic-1"),
    piechartAlienTextGraphic2Div = document.getElementById("piechart-alien-text-graphic-2"),
    piechartAlienTextAnimation1Div = document.getElementById("piechart-alien-text-animation-1"),
    piechartAlienTextAnimation2Div = document.getElementById("piechart-alien-text-animation-2"),
    piechartAlienTextCode1Div = document.getElementById("piechart-alien-text-code-1"),
    piechartAlienTextCode2Div = document.getElementById("piechart-alien-text-code-2"),
    bubbleDiv = document.getElementById("bubble"),
    shiftUpDownLayerHorizontalIncrement = 40,
    shiftUpDownLayerHorizontalInterval = 40,
    seaAnimalSwimDistance = 900,
    skill1ContainerDiv = document.getElementById("skill-1-container"),
    fishArray = new Array,
    fishEyeArray = new Array,
    isFishStillAnimating = !1,
    fishAnimateNumber = 0,
    numberOfFishInEachRowArray = new Array;
numberOfFishInEachRowArray.push(1, 0, 0, 0);
var canAnimateCrabInformation, skill2ContainerDiv = document.getElementById("skill-2-container"),
    crabArray = new Array,
    crabEyeArray = new Array,
    isCrabStillAnimating = !1,
    crabAnimateNumber = 0,
    numberOfCrabInEachRowArray = new Array;
numberOfCrabInEachRowArray.push(6, 1, 1);
var canAnimateTurtleInformation, skill3ContainerDiv = document.getElementById("skill-3-container"),
    turtleArray = new Array,
    turtleEyeArray = new Array,
    isTurtleStillAnimating = !1,
    turtleAnimateNumber = 0,
    numberOfTurtleInEachRowArray = new Array;
numberOfTurtleInEachRowArray.push(3, 2, 2, 2);
var isMariJumping, isMariFalling, swimUpHeight, layersMovement, mariRightEdge, mariLeftEdge, mariMaxHorizontalDistance, canAnimateMariRunSwim, mariStartFrame, mariStopFrame, shiftMariFrameTimer, pageVerticalPositionWhenAnimateMari1, pageVerticalPositionWhenAnimateMari2, canAnimateNbaInformation, urmahBoardsCounter, urmahBoardsAnimationTimer, urmahPlayerCounter, urmahPlayerTimer, happyMariTimer, scrollOrSwipeTextContainerTimer, waterfallTimer, drawFireworkTimer, fireworkCenterX, fireworkCenterY, fireworkOneRadiusDistance, fireworkOneRotationAngle, drawOneLayerOfFireworkTimer, pageVerticalPosition = 0,
    pageVerticalPositionOnTouch = 0,
    previousPageVerticalPosition = 0,
    deltaPageVerticalPosition = 0,
    isMariSwimming = !1,
    isMariBelowSeaLevel = !1,
    elevationArray = new Array,
    elevationNumberBelowMari = null,
    distanceBetweenMariAndBalloon = 150,
    counter = 0,
    switcher = 1,
    mariStaticFrame = 0,
    mariStartRunFrame = 1,
    mariStopRunFrame = 2,
    mariStartSwimFrame = 3,
    mariStopSwimFrame = 4,
    mariSwimDownFrame = 5,
    mariStartJumpFrame = 6,
    mariStopJumpFrame = 7,
    mariOneFrameWidth = 200,
    shiftMariFrameTimeInterval = 200,
    minimumVerticalDistanceToTriggerMariSwimDownFrame = 100,
    urmahBoardArray = new Array,
    about3ContainerDiv = document.getElementById("urmah-container"),
    urmahPlayerDiv = document.getElementById("urmah-player"),
    urmahPlayerContainerDiv = document.getElementById("urmah-player-container"),
    urmahPlayerFrameDiv = document.getElementById("urmah-player-frame"),
    urmahRimContainerDiv = document.getElementById("urmah-rim-container"),
    urmahBallDiv = document.getElementById("urmah-ball"),
    contactContainerDiv = document.getElementById("birthday-container"),
    isMariHappy = !1,
    scrollOrSwipeTextContainer1Div = document.getElementById("scroll-or-swipe-text-container-1"),
    scrollOrSwipeTextContainer2Div = document.getElementById("scroll-or-swipe-text-container-2"),
    canHideScrollOrSwipeTextContainer = !0,
    canAnimateScrollOrSwipeTextContainer = !0,
    waterfall1Div = document.getElementById("waterfall-1"),
    waterfall2Div = document.getElementById("waterfall-2"),
    touchStartX = 0,
    touchCurrentX = 0,
    touchEndX = 0,
    fireworksContainerDiv = document.getElementById("fireworks-container"),
    fireworkArray = new Array,
    fireworkSvgArray = new Array,
    cArray = new Array,
    drawFireworkCounter = 0,
    fireworkRowNumber = 8,
    fireworkColumnNumber = 16,
    fireworkLayerNumber = 0,
    fireworkDotRadius = 5,
    canDrawManyFireworks = !0;
disableIsMariJumpingAndFalling();
var landInformationContainerArray = new Array;
landInformationContainerArray.push(about1ContainerDiv, about2ContainerDiv, about3ContainerDiv, experience1ContainerDiv, experience2ContainerDiv, experience3ContainerDiv);
var canScrollOrSwipe, seaInformationContainerArray = new Array;
seaInformationContainerArray.push(skill1ContainerDiv, skill2ContainerDiv, skill3ContainerDiv), setAllNbaCounter(), disableScrollOrSwipe(), $(window).on("beforeunload", function() {
    $(window).scrollTop(0)
}), window.onload = function() {
    "computer" != deviceName && initTouchEvents(), storeDivs(), setFrontLayerVerticalHeight(), setBannersContainerVerticalPosition(), shiftUpPreloader(), showContainer(), initVariablesAfterShowContainer(), shiftUpHorizontalLayersAfterEverythingLoaded(), disableAnimateMariRunSwim(), resetVariables(), setPageHeight(), setLayerSpeed(), positionVerticalLayersHorizontally(), positionBalloonAndMariContainerHorizontally(), positionBalloonVertically(), positionContactContainer(), positionFireworksContainer(), resetFunctions(), positionSplashContainer(), setMariLeftAndRightEdge(), hideMariEyesClose(), animateMariEyes(), animateWaterfall(), positionSeaFloorObjectsVertically(), openSquidHands(), hideBubble(), setRobotHandsToDefault(), createFireworkSvg(), appendFireworkSvgToContainer()
}, window.onscroll = function(e) {
    1 == canScrollOrSwipe && (detectPageVerticalPosition(), runTheseFunctionsAfterScrollOrSwipe())
}, window.onresize = function(e) {
    setFrontLayerVerticalHeight(), setBannersContainerVerticalPosition(), setPageHeight(), detectPageVerticalPosition(), orientMari(), setLayerSpeed(), moveLayers(), setMariLeftAndRightEdge(), shiftUpDownHorizontalLayersOnResize(), animateInformationAndEnemiesElements(), positionSplashContainer(), positionMariContainerVertically(), positionBalloonVertically(), positionPlants(), positionExperienceTextContainer(), positionChainBlockAndStringContainer(), positionSeaFloorObjectsVertically(), enableScrollOrSwipe(), printResizeText()
}, $(window).on("orientationchange", orientationChangeHandler);