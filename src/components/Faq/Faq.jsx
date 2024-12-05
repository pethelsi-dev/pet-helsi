import { useState } from "react";
import faqGirlDog1x from "../../assets/Images/faq-girl-dog-desktop@1x.png";
import faqGirlDog2x from "../../assets/Images/faq-girl-dog-desktop@2x.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import spriteSistem from "../../assets/Images/sprite-sistem.svg";
import Icon from "../Icon/Icon";
import style from "./Faq.module.css";

export default function Faq() {
  const [activeItem, setActiveItem] = useState(null);

  const handleAccordionChange = expandedItems => {
    setActiveItem(expandedItems[0] || null);
  };

  return (
    <div className={style.faqContainer}>
      <div className={style.faqImageWrapper}>
        <picture className={style.faqPictureDesk}>
          <source
            media="(min-width: 1440px)"
            srcSet={`${faqGirlDog1x} 1x, ${faqGirlDog2x} 2x`}
          />
          <img
            src={faqGirlDog1x}
            alt="girl with dog"
            className={style.imageFaq}
          />
        </picture>
      </div>

      <div className={style.faqWrapper}>
        <div className={style.faqTitleWrapper}>
          <h3 className={style.faqTitle}>FAQ</h3>
          <div className={style.imageContainer}></div>
        </div>

        <Accordion
          allowZeroExpanded
          onChange={handleAccordionChange}
          className={style.faqAccordion}>
          <AccordionItem uuid={0} className={style.faqAccordionItem}>
            <AccordionItemHeading>
              <AccordionItemButton className={style.accordionButton}>
                <p className={style.accordionButtonTitle}>
                  Як проходить онлайн-консультація?
                </p>
                {activeItem === 0 ? (
                  <Icon
                    sprite={spriteSistem}
                    id={"icon-dash"}
                    width="24px"
                    height="24px"
                    className={style.iconPanelAccordion}
                  />
                ) : (
                  <Icon
                    sprite={spriteSistem}
                    id={"icon-plus"}
                    width="24px"
                    height="24px"
                    className={style.iconPanelAccordion}
                  />
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={style.faqAccordionItemDescr}>
              <ol className={style.accordionText}>
                <li className={style.accordionTextItem}>
                  Заповніть форму з питаннями, оберіть дату прийому{" "}
                </li>
                <li className={style.accordionTextItem}>
                  Із запропонованого списку оберіть ветеринара та бажаний час
                  прийому
                </li>
                <li className={style.accordionTextItem}>
                  Оплатіть консультацію та очікуйте на підтвердження ветеринаром
                </li>
                <li className={style.accordionTextItem}>
                  Після підтвердження на вказаний вами E-mail прийде посилання
                  на консультацію
                </li>
              </ol>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid={1} className={style.faqAccordionItem}>
            <AccordionItemHeading>
              <AccordionItemButton className={style.accordionButton}>
                <p className={style.accordionButtonTitle}>
                  Коли корисна онлайн-консультація?
                </p>
                {activeItem === 1 ? (
                  <Icon
                    sprite={spriteSistem}
                    id={"icon-dash"}
                    width="24px"
                    height="24px"
                    className={style.iconPanelAccordion}
                  />
                ) : (
                  <Icon
                    sprite={spriteSistem}
                    id={"icon-plus"}
                    width="24px"
                    height="24px"
                    className={style.iconPanelAccordion}
                  />
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={style.faqAccordionItemDescr}>
              <p className={style.accordionText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totам,
                veniam.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid={2} className={style.faqAccordionItem}>
            <AccordionItemHeading>
              <AccordionItemButton className={style.accordionButton}>
                <p className={style.accordionButtonTitle}>
                  Як проходить оплата?
                </p>
                {activeItem === 2 ? (
                  <Icon
                    sprite={spriteSistem}
                    id={"icon-dash"}
                    width="24px"
                    height="24px"
                    className={style.iconPanelAccordion}
                  />
                ) : (
                  <Icon
                    sprite={spriteSistem}
                    id={"icon-plus"}
                    width="24px"
                    height="24px"
                    className={style.iconPanelAccordion}
                  />
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={style.faqAccordionItemDescr}>
              <p className={style.accordionText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totам,
                veniam.
              </p>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid={3} className={style.faqAccordionItem}>
            <AccordionItemHeading>
              <AccordionItemButton className={style.accordionButton}>
                <p className={style.accordionButtonTitle}>
                  Якщо я хочу скасувати консультацію
                </p>
                {activeItem === 3 ? (
                  <Icon
                    sprite={spriteSistem}
                    id={"icon-dash"}
                    width="24px"
                    height="24px"
                    className={style.iconPanelAccordion}
                  />
                ) : (
                  <Icon
                    sprite={spriteSistem}
                    id={"icon-plus"}
                    width="24px"
                    height="24px"
                    className={style.iconPanelAccordion}
                  />
                )}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className={style.faqAccordionItemDescr}>
              <p className={style.accordionText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totам,
                veniam.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
