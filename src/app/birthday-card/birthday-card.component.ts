import { Component } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-birthday-card',
  templateUrl: './birthday-card.component.html',
  styleUrls: ['./birthday-card.component.scss']
})
export class BirthdayCardComponent {
  isOpen = false;
  recipient = 'Dear Husband';
  message = 'Wishing you a day filled with love, laughter, and cake!';
  sender = 'Your Wife';

  constructor() {
    // setTimeout(() => {
    // document.getElementById('redBalloon');
    // this.toggleCard();
    // }, 4000);
  }

  toggleCard() {
    this.isOpen = !this.isOpen;
    const audio = document.getElementById('birthdaySong') as HTMLAudioElement;

    if (this.isOpen) {
      const container = document.getElementById('sparkle-container');
      const numStars = 100;
      if (container) {
        for (let i = 0; i < numStars; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          star.style.top = Math.random() * 100 + '%';
          star.style.left = Math.random() * 100 + '%';
          star.style.animationDelay = (Math.random() * 2) + 's';
          container.appendChild(star);
        }
      }

      this.launchConfetti();
      this.launchFairyLights();
      //const lightsContainer = document.getElementById('lightsContainer');

      audio.currentTime = 0; // Reset to the beginning
      audio.muted = false; // Unmute the audio
      audio.play();
    }
    else {
      audio.pause();
    }
    //const audio = document.getElementById('birthdaySong') as HTMLAudioElement;
  } 

  launchConfetti() {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  launchFairyLights(){
    const container = document.getElementById('fairyLights');
    const lightCount = 30;

    if(!container) return;

    for (let i = 0; i < lightCount; i++) {
      const light = document.createElement('div');
      const size = 8;
      const delay = Math.random() * 3;
      const top = Math.random() * (container.clientHeight - size);
      const left = Math.random() * (container.clientWidth - size);

      light.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        top: ${top}px;
        left: ${left}px;
        background-color: #FFD700;
        border-radius: 50%;
        box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
        animation: twinkle 2s ${delay}s infinite ease-in-out;
      `;

      container.appendChild(light);
    }

    // Inject keyframes into document for twinkle animation
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.3); }
      }
    `;
    document.head.appendChild(style);
  }

}
