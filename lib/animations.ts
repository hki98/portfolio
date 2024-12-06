/**
 * Animation variants for Framer Motion.
 * Collection of reusable animations used throughout the portfolio.
 * 
 * @author Haian Ibrahim <contact@haian.me>
 * @copyright 2024 Haian Ibrahim
 */

/**
 * Fade in and slide up animation variant
 * Used for content that appears as user scrolls
 */
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

/**
 * Stagger container variant
 * Used to create staggered animations for child elements
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

/**
 * Scale animation for hover states
 * Provides a spring-like bounce effect
 */
export const scaleOnHover = {
  whileHover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

/**
 * Card hover animation variant
 * Combines scale and lift effects for interactive cards
 */
export const cardHover = {
  rest: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  }
}; 