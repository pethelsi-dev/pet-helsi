import { useState } from "react";
import { clsx } from "clsx";
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
    const newActiveItem = expandedItems.length > 0 ? expandedItems[0] : null;
    setActiveItem(newActiveItem);
  };

  return (
    <div id="faq" className={style.faqContainer}>
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
                  1. Як проходить онлайн-консультація?
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
                  Заповніть форму з питаннями, оберіть дату прийому
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
                  2. Коли буде корисна онлайн-консультація?
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
              <ol className={style.accordionText}>
                <li className={style.accordionTextItem}>
                  Немає можливості звернутися до клініки, а стан здоров’я
                  улюбленця викликає занепокоєння
                </li>
                <li className={style.accordionTextItem}>
                  Потрібні уточнення по догляду або щодо профілактичних обробок
                  вашого улюбленця
                </li>
                <li className={style.accordionTextItem}>
                  Ви перебуваєте за кордоном, але через мовний бар&apos;єр важко
                  порозумітися з місцевим ветеринаром
                </li>
                <li className={style.accordionTextItem}>
                  Консультація за кордоном є дорожчою
                </li>
              </ol>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid={2} className={style.faqAccordionItem}>
            <AccordionItemHeading>
              <AccordionItemButton className={style.accordionButton}>
                <p className={style.accordionButtonTitle}>
                  3. Як проходить оплата?
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
              <ul className={clsx(style.accordionText, style.list)}>
                <li className={style.accordionTextItem}>
                  Після обрання ветеринара і часу прийому вкажіть своє ім&apos;я
                  та email. Здійсніть оплату зручним для вас способом
                  (Mastercard, Visa, ApplePay). Ваша оплата зберігається на
                  рахунку сервісу та буде переведена ветеринару після завершення
                  консультації
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItem uuid={3} className={style.faqAccordionItem}>
            <AccordionItemHeading>
              <AccordionItemButton className={style.accordionButton}>
                <p className={style.accordionButtonTitle}>
                  4. Якщо я хочу скасувати консультацію?
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
              <ul className={clsx(style.accordionText, style.list)}>
                <li className={style.accordionTextItem}>
                  Ви можете скасувати консультацію не пізніше ніж за 1 годину
                  перед її початком. Кошти повернуться на банківську картку
                  згідного з умовами обслуговування вашого банку. Якщо ви
                  скасовуєте консультацію пізніше ніж за 1 годину, кошти не
                  повертаються
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
