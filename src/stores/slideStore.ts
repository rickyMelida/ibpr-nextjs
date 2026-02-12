import { create } from 'zustand';
import { BibleVerse } from '@/types';

/**
 * Store for managing carousel/slideshow state
 * Following Single Responsibility Principle - only handles slideshow logic
 */
interface SlideStore {
  currentSlide: number;
  slides: BibleVerse[];
  setCurrentSlide: (index: number) => void;
  nextSlide: () => void;
  previousSlide: () => void;
  setSlides: (slides: BibleVerse[]) => void;
}

export const useSlideStore = create<SlideStore>((set, get) => ({
  currentSlide: 0,
  slides: [
    {
      id: '1',
      text: 'Ustedes son mis Amigos, si hacen lo que les mando',
      reference: 'Juan 15:14',
    },
    {
      id: '2',
      text: 'Vengan a mí todos los que están cansados y llevan cargas pesadas, y yo les daré descanso.',
      reference: 'Mateo 11:28',
    },
    {
      id: '3',
      text: 'Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.',
      reference: 'Jeremias 33:3',
    },
  ],
  setCurrentSlide: (index) => set({ currentSlide: index }),
  nextSlide: () => {
    const { currentSlide, slides } = get();
    set({ currentSlide: (currentSlide + 1) % slides.length });
  },
  previousSlide: () => {
    const { currentSlide, slides } = get();
    set({ 
      currentSlide: currentSlide === 0 ? slides.length - 1 : currentSlide - 1 
    });
  },
  setSlides: (slides) => set({ slides }),
}));
