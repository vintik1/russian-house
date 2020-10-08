/**
 * about.js
 * Created by Egor Sadanov (@sadanov)
 * This component represents about page.
 */
import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next"
import Container from 'react-bootstrap/Container'

const About = () => {
	const {t} = useTranslation("about")
 
	return (
    <Container>
			<h1 className="my-5">{t('header')}</h1>
			<p>
				В конце сороковых годов, вскоре после прибытия в Мельбурн значительного количества россиян послевоенной волны эмиграции из Европы и Китая, в русском обществе проявилась нужда в культурно-просветительном центре и помещении для cобраний и увеселений. Новоприбывшие создавали церковные приходы, общественные и политические организации. Большинство общественых и политических организаций объединились в Русское Национальное Представительство штата Виктории (Р.Н.П.), с непримиримой антикоммунистической позицией всех членов и организаций.<br />
				<br />
				На общем собрании Р.Н.П. в июле 1962 года, по предложению Ефрема Васильевича Мокрого, был создан новый филиал Р.Н.П., названный Русским Общественным Центром (Р.О.Ц.),  в последствии переименованным в<br />
				<br />
				РУСCКИЙ ДОМ (Р.Д.). Двадцать четвертого марта 1963-го года было созвано Общее Организационное Собрание лиц заинтересованных в создании Р.Д. под председательством А.Н. Вырубова. Собрание обсудило создание Р.Д. и одобрило предложенный устав новой организации. Дата этого собрания считается днём рождения Русского Дома. В мае на втором заседании Организационного Собрания, председателем временного правления Р.Д. был избран Е.В. Мокрый, а в состав его вошли Л.А. Верцинский,  А.Н.Вырубов, А.А. Гринько, П.Ф. Качин, М.С. Стефани, В.А. Тюкова и А.А. Федорович.<br />
				<br />
				В апреле 1964 г. Р.Д. вышел из состава Р.Н.П., став самостоятельной организацией, а в 1965-ом году Р.Н.П. было распущено и культурно-просветительная, общественная и увеселительная деятельность Мельбурна сосредоточилась в Русском Доме, который был официально зарегистрирован в июне 1967 г.<br />
				<br />
				Интенсивный сбор средств и поиски подходящего помещения, начатые в 1965 г. увенчались успехом в 1967 г, когда было приобретено, на депозит, старинное двухэтажное здание в плачевном состаянии, вблизи центра г. Мельбурна.  В 1968 г., после срочного, но не полного ремонта, здание  было освящено вл. Константином.  Помещениями  начали пользоваться в следующем году.  Прилегающая квартира, а потом и верхний зал были сданы в аренду. Нижний зал время от времени снимали разные общественные организации, как-то театральный кружок, балалаечный оркестр, танцевальный ансамбль и частные лица. По воскресеньям волонтёры готовили платные обеды.<br />
				<br />
				В первые годы существования, параллельно со сбором средств для выплаты здания и ремонта, в Русском Доме кипела культурно-просветительная работа, как-то устная газета под редакцией В. Панова и А Вишневского, концерты под руководством М.С. Стефани с участием её театральной студии, доклады на политические и художественные темы, литературные встречи «Вечера у Зеленой Лампы»,  выставка Зарубежной Книги, организованная С.А. Зезиным и демонстрации Ф.И. Тарловым русских кинофильмов.<br />
				<br />
				В феврале 1970 года была торжественно отмечена годовщина смерти Адмирала А.В. Колчака  и был проведен первый Фестиваль Русских Поэтов  Австралии под руководством А.А. Федоровича с участием тринадцати поэтов,  восьми поэтесс и жюри, состоявшее из выдающихся литераторов Австралии  под преседательством С.А. Зезина. В общей сложности сорок два поэта Австралии прислали свои стихи, которые были в последствии изданы Русским Домом.   Лауреатом фестиваля стал И.М. Смолянинов. В этом же году А.А. Федорович приводит в порядок и подготовляет к открытию библиотеку, насчитывающую более 500 томов русских книг (среди них 300 томов пожертвованных г-ном Гижицким), около 300 томов английских и большое количество технической литературы.<br />
				<br />
				После ухода Е.В. Мокрого с поста председателя в 1971 г., им стал М.И. Климецкий, который пробыл на этом посту 25 лет. Как было сказано выше, в начале здание интенсивно употреблялось для общественных мероприятий , что способствовало сплочению русской общественности, сбору средств и окончательной выплаты займа в 1977 г. Таким образом ценное здание и имущество Русского Дома стало достоянием его членов и всего русского общества Мельбурна. В 1982 г. Кино-фирма «Crawford Productions” снимала часть Русского Дома для постановки сериалов из T.V. программы “Carson’s Law”. В последующии годы посильная организация мероприятий продолжалась, но их поддержка общественности постепенно   ослабевала из-за трений внутри организации и разногласий с другими организациями и членами общества. Г-жа Стефани вышла из Русского Дома, но репетиции и концерты Театрального Кружка продолжались под управлением А.А. Ильина.<br />
				<br />
				В 1983 г. был проведен второй  Фестиваль Русских Поэтов Австралии под председательством И.М. Смолянинова. В этом фестивале приняли участие двадцать поэтов и поэтесс, проживающих в Австралии. Все произведения поэтов – участников фестиваля были изданы отдельным сборником.<br />
				<br />
				В начале 1986 г. был создан комитет «Празднования 1000-летия Крещения Руси», возглавляемый  Н.Н. Григоровичем. В течение двух лет этот комитет организовал свыше сорока докладов на исторические, художественные и архитектурные темы, прочитаные кандидатом архитектуры, художником В.С.Тереховым. В этом же году был создан комитет для помощи жертвам Чернобыля, также под руководством Н.Н. Григоровича. Этим комитетом были собраны  и посланы на Украину, в Россию и Белоруссию значительные средства и большое количество вещей в контейнерах . В 1986 г. и последующие годы были организованы поездки пострадавших детей, из Чернобыля и других зараженных радиацией районов, в Мельбурн и их  прием и определение в семьи (русские и австралийские) для отдыха . Через некоторое время Чернобыльский комитет  Н.Н. Григоровича отделился от Русского Дома, став самостоятельной организацией.<br />
				<br />
				В 1996 г. председателем был избран М.И. Стиркуль. В этот период был написан и одобрен новый Устав Русского Дома на английском языке и организация была инкорпорирована. В начале 90-их годов деятельность в Русском Доме значительно замирает и вновь возобновляется в 1998 г. с приходом новых членов Правления. Проводится неотложный и дорогостоящий ремонт здания. Особенно важным шагом в начале 2000-го года была договоренность о сдаче комнат верхнего этажа Русскому Этническому Представительству (Р.Э.П.) на обоюдно выгодных, дружеских условиях, что обеспечило финансовое положение Русского Дома и сделало его доступным в рабочее время.<br />
				<br />
				Новое Правление, во главе с Е.Н. Зубриным, избранное в конце 2000 г., усилило темпы обновления помещений, приобрело необходимые кондиционеры и электронную апаратуру (главным образом за счет государственных дотаций), существенно изменило Устав и провело успешную акцию по привлечению свыше 50-ти новых членов в Русский Дом. Правление уполномочило директора частной фирмы, А.А. Ильина, обновить за свой счет верхний зал и бывшую биллиардную комнату. Были сделаны предварительные шаги по постройке здания для библиотеки книг, находящихся в Русском Доме на полках в разных комнатах и в коробках и огромного количества книг переданных Мельбурнским университетом и членами русской общины. Ежегодно Правление проводило несколько мероприятий — как Вечера Друзей, празднование Масленицы и  Нового Года по старому стилю. Кроме группы А.А Ильина еще несколько русских и иностранных танцевальных кружков стали снимать помещения  в Русском Доме для репетицей. Была установлена тесная связь с Посольством Русской Федерации и в Русском Доме некоторое время помещался Почетный Консул Посольства. Ежегодно в Русском Доме, Посольство проводило перепись пенсионеров – граждан Российской Федерации. Все эти начинания продолжаются до сих пор.<br />
				<br />
				В 2004 г. председателем Правления был избран В.В.Лефлёр. Проект постройки здания библиотеки продолжался  и был закончен в 2010 г. благодаря дотации Правительства и значительных пожертвований четы А. и М. Кескевич, в чью честь библиотека названа, и покойного О. Яновского. Члены Правления под руководством М.С.Мингиной провели огромную работу по расстановке книг на полки, их переписи и регистрации на компютере. Новая библиотека вновь открыла свои двери в феврале 2010 г. В библиотеке около 10,000 книг на русском языке.<br />
				<br />
				С 2009 года Президентом РД является Григорий Михайлович Лаврин. За это время установлена новая система безопасности на входную дверь, проведен ремонт женской и мужской уборных, заменены полы и покрашены стены в столовой, обновлена кухня, приобретен новый холодильник. В 2015 г. обновлена стена во внутреннем дворике, установлены кондиционеры на кухне и в помещениях Этнического Представительства, отремонтирована крыша.  В 2016 г. приобретен бильярдный стол и новые стулья для хрустального зала. При председательстве Г.М. Лаврина Русский Дом открыл двери молодежи, которые приехали в середине 2000-х годов. Это дало толчок КВН-движению в Австралии, Совету Русскоговорящей Молодежи Австралии, молодежным мероприятиям в Русском Доме.<br />
				<br />
				Большой ремонт был сделан за три последних года. Это замена окон на верхнем и нижнем этажах, замена кондиционеров, покраска стен и потолков Хрустального зала и Верхнего зала, а также фойе, лестницы и офисной комнаты. В Хрустальном зале установлены большие зеркала, куплены новые шторы и телевизор, обновлена роспись в фойе, в кухне установлена новая газовая плита с электрической духовкой, куплены новые удобные шкафы для посуды. Все эти усовершенствования позволяют успешнее сдавать помещения РД в аренду, собирать необходимы для его поддержания деньги.<br />
				<br />
				Но главное не это, главное –то, что Русский Дом остается центром общественной и культурно-просветительной работы для русскоязычной общины Мельбурна. В нем проходят наши традиционные праздники: Новый год, Рождественская детская Елка, Масленица, День Победы; чествование ветеранов русскоязычной общины. В нем занимаются наши танцевальные группы (Сударушка, Калинка, Русь), в нем проходят встречи Литературно-театрального общества им. Солоухина, лекции клуба «Эрудит». Много делается для подрастающего поколения: это проведение «Тотального диктанта», детских международных конкурсов «Живая классика» и «Здравствуй, Россия!». Дети- победители этих конкурсов — имеют возможность поехать на историческую родину. Некоторые участники родились в Австралии и никогда не видели Россию, а Русский Дом предоставляет площадку для такой уникальной возможности.<br />
				<br />
				Это организация и проведение детского музыкально-инструментального конкурса «Лира», собирающего уже в третий раз русскоязычных детей всех русских школ Мельбурна. Это регулярное проведение концертов, музыкально-поэтических фестивалей (таких как фестиваль памяти Владимира Высоцкого, или Пушкинский фестиваль), встреч с интересными людьми (с Николаем Дроздовым, с экспедицией РГО «Миклухо-Маклай. 21 век»).<br />
				<br />
				У правления Русского Дома обширные планы по завершению интерьера, внутреннего убранства нашего Дома, по обновлению библиотечного фонда с привлечением периодических российских изданий, по организации досуга детей, молодежи и представителей старшего поколения. Решение последнего отчетного собрания о покупке рояля позволит проводить музыкальные вечера с привлечением ведущих музыкантов Мельбурна и России, поднимет престиж и значимость РД как традиционного центра русской культуры.<br />
				<br />
				Русский Дом и его председатель, Григорий Лаврин, активно взаимодействуют с Русским Этническим Представительством, русскими школами, приходами и другими общественными русскоязычными организациями Мельбурна («Маленькое облачко», «Южный крест», «Печки-Лавочки», «Организация Российских Юных Разведчиков», «Ночные волки», «Музыкальный калейдоскоп», «Кокошник в Австралии».  «Русское радио 3zzz», Хоровое общество «Лира», «Дети-билингвы» и другими). Бережное отношение к прошлому и чуткий взгляд в будущее позволяют надеяться, что наш Русский Дом останется оплотом русской культуры в Мельбурне, что наши дети и внуки будут приходить сюда и не потеряют связи с Россией.
			</p><br />
    </Container>
	);
} 

export default About;