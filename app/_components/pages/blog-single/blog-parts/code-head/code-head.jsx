import styles from "./code-head.module.scss";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoCss3,
  IoLogoSass,
  IoLogoMarkdown,
  IoTerminal,
  IoTerminalOutline,
} from "react-icons/io5";

import { SiPhp } from "react-icons/si";

export default function CodeHead({ name, lang }) {
  const outputLanguageString = (value) => {
    switch (value) {
      case "html": {
        return {
          name: "HTML",
          icon: <IoLogoHtml5 />,
        };
      }
      case "php": {
        return {
          name: "PHP",
          icon: <SiPhp />,
        };
      }
      case "css": {
        return {
          name: "CSS",
          icon: <IoLogoCss3 />,
        };
      }
      case "scss": {
        return {
          name: "Sass",
          icon: <IoLogoSass />,
        };
      }
      case "js": {
        return {
          name: "JavaScript",
          icon: <IoLogoJavascript />,
        };
      }
      case "jsx": {
        return {
          name: "JSX",
          icon: <IoLogoReact />,
        };
      }
      case "md": {
        return {
          name: "Markdown",
          icon: <IoLogoMarkdown />,
        };
      }
      case "mdx": {
        return {
          name: "MDX",
          icon: <IoLogoMarkdown />,
        };
      }
      case "console": {
        return {
          name: "console",
          icon: <IoTerminalOutline />,
        };
      }
      default:
        break;
    }
  };

  const langData = outputLanguageString(lang);

  return (
    <div className={`${styles.code_head}`}>
      <div className={styles.dots}>
        <span></span>
      </div>

      <div className={styles.text_wrap}>
        {name && <span className={styles.name}>{name}</span>}
        <div className={styles.lang_wrap}>
          <div className={styles.icon} data-lang={lang}>
            {langData.icon}
          </div>
          <span className={styles.lang}>{langData.name}</span>
        </div>
      </div>
    </div>
  );
}
