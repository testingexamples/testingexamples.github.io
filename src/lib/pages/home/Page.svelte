<script lang="ts">
  import { SITE_NAME } from '#lib/site.js';
  import {
    CallToAction,
    CodeBlock,
    Details,
    SectionHeading,
    Separator
  } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    metaDescription: string;
    heading: string;
    intro: string;
    examplesHeading: string;
    hero: { learn: string; practice: string; code: string };
    sourceCodeHeading: string;
    links: {
      googleSearchExamples: string;
      googleMapsExamples: string;
      givenWhenThenExamples: string;
      demoApp: string;
      demoAppSuffix: string;
      practice: string;
      practiceSuffix: string;
    };
  };

  const EN_001: Messages = {
    metaDescription:
      'Free open source HTML fixtures for practising browser automation: find elements by id, name, class, link text, and XPath, and interact with form inputs.',
    heading: `Welcome to ${SITE_NAME}`,
    intro: `If you're new to browser automation, you're in the right place. ${SITE_NAME} is a small, free, open source site built for anyone learning to make a browser do things automatically — click, type, search, wait, assert — whether you've never written a line of code or you already know the ropes and just want a quick reference or somewhere reliable to try something out.`,
    examplesHeading: 'Examples',
    hero: { learn: 'Learn', practice: 'Practice', code: 'Code' },
    sourceCodeHeading: 'Examples of source code',
    links: {
      googleSearchExamples: 'Google Search Examples',
      googleMapsExamples: 'Google Maps Examples',
      givenWhenThenExamples: 'Given-When-Then Examples',
      demoApp: 'Demo App',
      demoAppSuffix: 'sign in, nav icons, search, and tabs to practise on',
      practice: 'Practice',
      practiceSuffix: 'stable ids, names, classes, and text to find and interact with'
    }
  };

  const EN_US: Messages = {
    ...EN_001,
    metaDescription:
      'Free open source HTML fixtures for practicing browser automation: find elements by id, name, class, link text, and XPath, and interact with form inputs.',
    links: {
      ...EN_001.links,
      demoAppSuffix: 'sign in, nav icons, search, and tabs to practice on'
    }
  };

  const CY: Messages = {
    metaDescription:
      "Cynnwys HTML sefydlog, cod agored ac am ddim, ar gyfer ymarfer awtomatiaeth porwr: dewch o hyd i elfennau yn ôl id, name, class, testun dolen ac XPath, a rhyngweithiwch â mewnbynnau ffurflen.",
    heading: `Croeso i ${SITE_NAME}`,
    intro: `Os ydych chi'n newydd i awtomatiaeth porwr, rydych chi yn y lle iawn. Mae ${SITE_NAME} yn wefan fach, cod agored ac am ddim, a adeiladwyd ar gyfer unrhyw un sy'n dysgu sut i wneud i borwr wneud pethau'n awtomatig — clicio, teipio, chwilio, aros, gwirio — boed nad ydych erioed wedi ysgrifennu llinell o god, neu eich bod eisoes yn gyfarwydd â'r pethau sylfaenol ac eisiau deunydd cyfeirio cyflym neu rywle dibynadwy i roi cynnig ar rywbeth.`,
    examplesHeading: 'Enghreifftiau',
    hero: { learn: 'Dysgu', practice: 'Ymarfer', code: 'Cod' },
    sourceCodeHeading: 'Enghreifftiau o god ffynhonnell',
    links: {
      googleSearchExamples: 'Enghreifftiau Chwilio Google',
      googleMapsExamples: 'Enghreifftiau Mapiau Google',
      givenWhenThenExamples: 'Enghreifftiau Given-When-Then',
      demoApp: 'Ap Arddangos',
      demoAppSuffix: 'mewngofnodi, eiconau llywio, chwilio, a thabiau i ymarfer arnynt',
      practice: 'Ymarfer',
      practiceSuffix: "ids, names, classes, a thestun sefydlog i ddod o hyd iddynt a rhyngweithio â nhw"
    }
  };

  const ZH: Messages = {
    metaDescription:
      '免费开源的 HTML 测试夹具，用于练习浏览器自动化：通过 id、name、class、链接文字和 XPath 查找元素，并与表单输入交互。',
    heading: `欢迎来到 ${SITE_NAME}`,
    intro: `如果你刚接触浏览器自动化，这里正是你该来的地方。${SITE_NAME} 是一个小巧、免费、开源的网站，专为任何想学习让浏览器自动完成操作——点击、输入、搜索、等待、断言——的人打造，无论你从未写过一行代码，还是已经很熟悉，只是想找一个快速参考或一个可靠的地方试试手。`,
    examplesHeading: '示例',
    hero: { learn: '学习', practice: '练习', code: '代码' },
    sourceCodeHeading: '源代码示例',
    links: {
      googleSearchExamples: '谷歌搜索示例',
      googleMapsExamples: '谷歌地图示例',
      givenWhenThenExamples: 'Given-When-Then 示例',
      demoApp: '演示应用',
      demoAppSuffix: '登录、导航图标、搜索和标签页，供你练习',
      practice: '练习',
      practiceSuffix: '稳定的 id、name、class 和文字，供查找与交互'
    }
  };

  const AR: Messages = {
    metaDescription:
      'تجهيزات HTML مجانية ومفتوحة المصدر للتدرب على أتمتة المتصفح: ابحث عن العناصر بالمعرّف (id) والاسم والفئة ونص الرابط وXPath، وتفاعل مع مدخلات النماذج.',
    heading: `مرحبًا بك في ${SITE_NAME}`,
    intro: `إن كنت جديدًا على أتمتة المتصفح، فأنت في المكان الصحيح. ${SITE_NAME} موقع صغير ومجاني ومفتوح المصدر، بُني لكل من يتعلم جعل المتصفح يؤدي المهام تلقائيًا — النقر والكتابة والبحث والانتظار والتحقق — سواء لم تكتب سطر كود من قبل أو كنت تعرف الأساسيات وتريد مرجعًا سريعًا أو مكانًا موثوقًا لتجربة شيء ما.`,
    examplesHeading: 'أمثلة',
    hero: { learn: 'تعلّم', practice: 'التدريب', code: 'الكود' },
    sourceCodeHeading: 'أمثلة على الشيفرة المصدرية',
    links: {
      googleSearchExamples: 'أمثلة Google Search',
      googleMapsExamples: 'أمثلة Google Maps',
      givenWhenThenExamples: 'أمثلة Given-When-Then',
      demoApp: 'تطبيق تجريبي',
      demoAppSuffix: 'تسجيل دخول وأيقونات تنقل وبحث وعلامات تبويب للتدرب عليها',
      practice: 'التدريب',
      practiceSuffix: 'معرّفات وأسماء وفئات ونصوص ثابتة للعثور عليها والتفاعل معها'
    }
  };

  const KO: Messages = {
    metaDescription:
      '브라우저 자동화를 연습하기 위한 무료 오픈 소스 HTML 픽스처: id, name, class, 링크 텍스트, XPath로 요소를 찾고 양식 입력과 상호작용해 보세요.',
    heading: `${SITE_NAME}에 오신 것을 환영합니다`,
    intro: `브라우저 자동화가 처음이라면 잘 찾아오셨습니다. ${SITE_NAME}은(는) 브라우저가 클릭, 입력, 검색, 대기, 단언 같은 일을 자동으로 하게 만드는 법을 배우는 모든 사람을 위해 만든 작은 무료 오픈 소스 사이트입니다. 코드를 한 줄도 써 본 적이 없든, 이미 요령을 알고 빠른 참고 자료나 믿을 만한 연습 장소가 필요하든 상관없습니다.`,
    examplesHeading: '예제',
    hero: { learn: '학습', practice: '연습', code: '코드' },
    sourceCodeHeading: '소스 코드 예시',
    links: {
      googleSearchExamples: 'Google Search 예제',
      googleMapsExamples: 'Google Maps 예제',
      givenWhenThenExamples: 'Given-When-Then 예제',
      demoApp: '데모 앱',
      demoAppSuffix: '연습할 수 있는 로그인, 내비게이션 아이콘, 검색, 탭',
      practice: '연습',
      practiceSuffix: '찾고 상호작용해 볼 수 있는 안정적인 id, name, class, 텍스트'
    }
  };

  const FR: Messages = {
    metaDescription:
      "Contenu HTML stable, gratuit et open source, pour s'exercer à l'automatisation de navigateur : trouver des éléments par id, name, class, texte de lien et XPath, et interagir avec des champs de formulaire.",
    heading: `Bienvenue sur ${SITE_NAME}`,
    intro: `Si l'automatisation de navigateur est nouvelle pour vous, vous êtes au bon endroit. ${SITE_NAME} est un petit site gratuit et open source, conçu pour toute personne qui apprend à faire exécuter des actions automatiquement à un navigateur — cliquer, saisir, rechercher, attendre, vérifier — que vous n'ayez jamais écrit une ligne de code ou que vous connaissiez déjà les bases et cherchiez simplement une référence rapide ou un endroit fiable pour essayer quelque chose.`,
    examplesHeading: 'Exemples',
    hero: { learn: 'Apprendre', practice: "S'exercer", code: 'Code' },
    sourceCodeHeading: 'Exemples de code source',
    links: {
      googleSearchExamples: 'Exemples de Recherche Google',
      googleMapsExamples: 'Exemples de Google Maps',
      givenWhenThenExamples: 'Exemples Given-When-Then',
      demoApp: 'Application de démonstration',
      demoAppSuffix: "connexion, icônes de navigation, recherche et onglets pour s'exercer",
      practice: "S'exercer",
      practiceSuffix: "ids, names, classes et textes stables à trouver et avec lesquels interagir"
    }
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_US,
    'cy-gb': CY,
    'cy-001': CY,
    'zh-cn': ZH,
    'ar-001': AR,
    'ko-001': KO,
    'fr-001': FR
  };

  const m = $derived(MESSAGES[locale]);
</script>

<svelte:head>
  <title>{SITE_NAME}</title>
  <meta name="description" content={m.metaDescription} />
</svelte:head>

<div class="page-header">
  <h1>{m.heading}</h1>
</div>

<section class="section prose">
  <p>{m.intro}</p>

  <p class="hero-actions">
    <CallToAction class="button button-primary" href={localeHref(locale, 'learn')}
      >{m.hero.learn}</CallToAction
    >
    <CallToAction class="button button-secondary" href={localeHref(locale, 'practice')}
      >{m.hero.practice}</CallToAction
    >
    <CallToAction class="button button-secondary" href={localeHref(locale, 'code')}
      >{m.hero.code}</CallToAction
    >
  </p>

  <h3>{m.examplesHeading}</h3>
  <ul class="repo-list">
    <li><a href={localeHref(locale, 'examples-google-search')}>{m.links.googleSearchExamples}</a></li>
    <li><a href={localeHref(locale, 'examples-google-maps')}>{m.links.googleMapsExamples}</a></li>
    <li><a href={localeHref(locale, 'given-when-then')}>{m.links.givenWhenThenExamples}</a></li>
    <li><a href={localeHref(locale, 'app')}>{m.links.demoApp}</a> — {m.links.demoAppSuffix}</li>
    <li><a href={localeHref(locale, 'practice')}>{m.links.practice}</a> — {m.links.practiceSuffix}</li>
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.sourceCodeHeading} level={2} />

  <Details summary="Selenium + JavaScript" open>
    <CodeBlock label="Selenium · JavaScript · selenium-webdriver (npm)">
      <pre><code>{`import { Builder, By, Key } from 'selenium-webdriver';

async function demo() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Given I am on https://google.com
    await driver.get('https://google.com');

    // When I type in the search box and click submit
    // Google's search input has commonly carried name="q".
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('testing examples', Key.RETURN);

    // Then I see search results
    const results = await driver.findElements(By.css('#search'));
    if (results.length === 0) {
      throw new Error('Expected to see search results, but none were found.');
    }
  } finally {
    await driver.quit();
  }
}

demo().catch((err) => console.error(err));
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Selenium + Python">
    <CodeBlock label="Selenium · Python · selenium (PyPI)">
      <pre><code>{`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()

try:
    # Given I am on https://google.com
    driver.get("https://google.com")

    # When I type in the search box and click submit
    # Google's search input has commonly carried name="q".
    search_box = driver.find_element(By.NAME, "q")
    search_box.send_keys("testing examples", Keys.RETURN)

    # Then I see search results
    results = driver.find_elements(By.CSS_SELECTOR, "#search")
    assert len(results) > 0, "Expected to see search results, but none were found."
finally:
    driver.quit()
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Selenium + Rust">
    <CodeBlock label="Selenium · Rust · thirtyfour (crates.io)">
      <pre><code>{`use std::time::Duration;

use thirtyfour::prelude::*;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // chromedriver must already be listening, e.g. \`chromedriver --port=9515\`.
    let driver = WebDriver::new("http://localhost:9515", DesiredCapabilities::chrome()).await?;

    // Run the scenario, but always quit the browser afterward.
    let result = scenario(&driver).await;
    driver.quit().await?;
    result
}

async fn scenario(driver: &WebDriver) -> anyhow::Result<()> {
    // Given I am on https://google.com
    driver.goto("https://google.com").await?;

    // When I type in the search box and click submit
    // Google's search input has commonly carried name="q". thirtyfour has
    // no By::Name, so use a CSS attribute selector. "\\u{E007}" is the
    // WebDriver Enter key.
    let search_box = driver.query(By::Css("[name='q']")).single().await?;
    search_box.send_keys("testing examples\\u{E007}").await?;

    // Then I see search results
    let found = driver
        .query(By::Css("#search"))
        .wait(Duration::from_secs(10), Duration::from_millis(250))
        .exists()
        .await?;
    assert!(found, "Expected to see search results, but none were found.");
    Ok(())
}
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Selenium + C#">
    <CodeBlock label="Selenium · C# · Selenium.WebDriver (NuGet)">
      <pre><code>{`using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

// Selenium Manager finds or downloads a matching chromedriver.
// \`using\` quits the browser even if the check below throws.
using IWebDriver driver = new ChromeDriver();

// Given I am on https://google.com
driver.Navigate().GoToUrl("https://google.com");

// When I type in the search box and click submit
// Google's search input has commonly carried name="q".
var searchBox = driver.FindElement(By.Name("q"));
searchBox.SendKeys("testing examples" + Keys.Return);

// Then I see search results
var wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10))
{
    Message = "Expected to see search results, but none were found."
};
wait.Until(d => d.FindElements(By.CssSelector("#search")).Count > 0);
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Selenium + Java">
    <CodeBlock label="Selenium · Java · selenium-java (Maven)">
      <pre><code>{`import java.time.Duration;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Demo {
    public static void main(String[] args) {
        // Selenium Manager finds or downloads a matching chromedriver.
        WebDriver driver = new ChromeDriver();

        try {
            // Given I am on https://google.com
            driver.get("https://google.com");

            // When I type in the search box and click submit
            // Google's search input has commonly carried name="q".
            WebElement searchBox = driver.findElement(By.name("q"));
            searchBox.sendKeys("testing examples" + Keys.RETURN);

            // Then I see search results
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            wait.until(d -> !d.findElements(By.cssSelector("#search")).isEmpty());
        } finally {
            driver.quit();
        }
    }
}
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Selenium + Elixir">
    <CodeBlock label="Selenium · Elixir · wallaby (Hex)">
      <pre><code>{`require Wallaby.Browser
alias Wallaby.{Browser, Query}

{:ok, _} = Application.ensure_all_started(:wallaby)
{:ok, session} = Wallaby.start_session()

try do
  # Given I am on https://google.com
  session = Browser.visit(session, "https://google.com")

  # When I type in the search box and click submit
  # Google's search input has commonly carried name="q".
  session |> Browser.send_keys(Query.css("[name='q']"), ["testing examples", :enter])

  # Then I see search results
  Browser.assert_has(session, Query.css("#search"))
after
  Wallaby.end_session(session)
end
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Selenium + Go">
    <CodeBlock label="Selenium · Go · tebeka/selenium (Go modules)">
      <pre><code>{`package main

import (
	"time"

	"github.com/tebeka/selenium"
)

func main() {
	// chromedriver must already be running on port 9515.
	driver, err := selenium.NewRemote(selenium.Capabilities{"browserName": "chrome"}, "http://localhost:9515")
	if err != nil {
		panic(err)
	}
	defer driver.Quit()

	// Given I am on https://google.com
	if err := driver.Get("https://google.com"); err != nil {
		panic(err)
	}

	// When I type in the search box and click submit
	// Google's search input has commonly carried name="q".
	searchBox, err := driver.FindElement(selenium.ByName, "q")
	if err != nil {
		panic(err)
	}
	if err := searchBox.SendKeys("testing examples" + selenium.EnterKey); err != nil {
		panic(err)
	}

	// Then I see search results
	err = driver.WaitWithTimeout(func(d selenium.WebDriver) (bool, error) {
		results, err := d.FindElements(selenium.ByCSSSelector, "#search")
		return err == nil && len(results) > 0, nil
	}, 10*time.Second)
	if err != nil {
		panic("Expected to see search results, but none were found.")
	}
}
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Selenium + Kotlin">
    <CodeBlock label="Selenium · Kotlin · selenium-java (Maven)">
      <pre><code>{`import java.time.Duration
import org.openqa.selenium.By
import org.openqa.selenium.Keys
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.support.ui.WebDriverWait

fun main() {
    // Selenium Manager finds or downloads a matching chromedriver.
    val driver = ChromeDriver()

    try {
        // Given I am on https://google.com
        driver.get("https://google.com")

        // When I type in the search box and click submit
        // Google's search input has commonly carried name="q".
        driver.findElement(By.name("q")).sendKeys("testing examples" + Keys.RETURN)

        // Then I see search results
        WebDriverWait(driver, Duration.ofSeconds(10))
            .until { driver.findElements(By.cssSelector("#search")).isNotEmpty() }
    } finally {
        driver.quit()
    }
}
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright + JavaScript">
    <CodeBlock label="Playwright · JavaScript · playwright (npm)">
      <pre><code>{`import { chromium } from 'playwright';

const browser = await chromium.launch();

try {
  const page = await browser.newPage();

  // Given I am on https://google.com
  await page.goto('https://google.com');

  // When I type in the search box and click submit
  // Google's search input has commonly carried name="q".
  await page.fill('[name="q"]', 'testing examples');
  await page.keyboard.press('Enter');

  // Then I see search results
  await page.waitForSelector('#search');
} finally {
  await browser.close();
}
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright + Python">
    <CodeBlock label="Playwright · Python · playwright (PyPI)">
      <pre><code>{`from playwright.sync_api import sync_playwright


def demo() -> None:
    """Search Google and check that results appear."""

    with sync_playwright() as p:
        browser = p.chromium.launch()

        try:
            page = browser.new_page()

            # Given I am on https://google.com
            page.goto("https://google.com")

            # When I type in the search box and click submit
            # Google's search input has commonly carried name="q".
            page.fill('[name="q"]', "testing examples")
            page.keyboard.press("Enter")

            # Then I see search results
            page.wait_for_selector("#search")
        finally:
            browser.close()


if __name__ == "__main__":
    demo()
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright + Rust">
    <CodeBlock label="Playwright · Rust · playwright-rs (crates.io)">
      <pre><code>{`use playwright_rs::{Page, Playwright, WaitUntil};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let pw = Playwright::launch().await?;
    let browser = pw.chromium().launch().await?;
    let page = browser.new_page().await?;

    // Run the scenario, but always close the browser afterward.
    let result = scenario(&page).await;
    browser.close().await?;
    result
}

async fn scenario(page: &Page) -> anyhow::Result<()> {
    // Given I am on https://google.com
    page.goto("https://google.com", None).await?;

    // When I type in the search box and click submit
    // Google's search input has commonly carried name="q".
    let search_box = page.locator("[name=\\"q\\"]");
    search_box.fill("testing examples", None).await?;
    search_box.press("Enter", None).await?;
    page.wait_for_load_state(Some(WaitUntil::Load)).await?;

    // Then I see search results
    let count = page.locator("#search").count().await?;
    assert!(count > 0, "Expected to see search results, but none were found.");
    Ok(())
}
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright + C#">
    <CodeBlock label="Playwright · C# · Microsoft.Playwright (NuGet)">
      <pre><code>{`using Microsoft.Playwright;

using var playwright = await Playwright.CreateAsync();
await using var browser = await playwright.Chromium.LaunchAsync();
var page = await browser.NewPageAsync();

// Given I am on https://google.com
await page.GotoAsync("https://google.com");

// When I type in the search box and click submit
// Google's search input has commonly carried name="q".
await page.FillAsync("[name=\\"q\\"]", "testing examples");
await page.Keyboard.PressAsync("Enter");

// Then I see search results
await page.WaitForSelectorAsync("#search");
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright + Java">
    <CodeBlock label="Playwright · Java · playwright (Maven)">
      <pre><code>{`import com.microsoft.playwright.Browser;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

public class Demo {
    public static void main(String[] args) {
        // try-with-resources shuts down the driver even if a step throws.
        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch();
            Page page = browser.newPage();

            // Given I am on https://google.com
            page.navigate("https://google.com");

            // When I type in the search box and click submit
            // Google's search input has commonly carried name="q".
            page.fill("[name=\\"q\\"]", "testing examples");
            page.keyboard().press("Enter");

            // Then I see search results
            page.waitForSelector("#search");

            browser.close();
        }
    }
}
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright + Elixir">
    <CodeBlock label="Playwright · Elixir · playwright (Hex)">
      <pre><code>{`alias Playwright.{Browser, Locator, Page}

{:ok, browser} = Playwright.launch(:chromium)
page = Browser.new_page(browser)

# Given I am on https://google.com
Page.goto(page, "https://google.com")

# When I type in the search box and click submit
# Google's search input has commonly carried name="q".
page |> Page.locator("[name='q']") |> Locator.fill("testing examples")
page |> Page.locator("[name='q']") |> Locator.press("Enter")

# Then I see search results
page |> Page.locator("#search") |> Locator.wait_for()

Browser.close(browser)
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright + Go">
    <CodeBlock label="Playwright · Go · playwright-go (Go modules)">
      <pre><code>{`package main

import "github.com/playwright-community/playwright-go"

func main() {
	pw, err := playwright.Run()
	if err != nil {
		panic(err)
	}
	defer pw.Stop()

	browser, err := pw.Chromium.Launch()
	if err != nil {
		panic(err)
	}
	defer browser.Close()

	page, err := browser.NewPage()
	if err != nil {
		panic(err)
	}

	// Given I am on https://google.com
	if _, err := page.Goto("https://google.com"); err != nil {
		panic(err)
	}

	// When I type in the search box and click submit
	// Google's search input has commonly carried name="q".
	if err := page.Locator("[name=\\"q\\"]").Fill("testing examples"); err != nil {
		panic(err)
	}
	if err := page.Keyboard().Press("Enter"); err != nil {
		panic(err)
	}

	// Then I see search results
	if err := page.Locator("#search").WaitFor(); err != nil {
		panic(err)
	}
}
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright + Kotlin">
    <CodeBlock label="Playwright · Kotlin · playwright (Maven)">
      <pre><code>{`import com.microsoft.playwright.Playwright

fun main() {
    // \`use\` shuts down the driver even if a step throws.
    Playwright.create().use { playwright ->
        val browser = playwright.chromium().launch()
        val page = browser.newPage()

        // Given I am on https://google.com
        page.navigate("https://google.com")

        // When I type in the search box and click submit
        // Google's search input has commonly carried name="q".
        page.fill("[name=\\"q\\"]", "testing examples")
        page.keyboard().press("Enter")

        // Then I see search results
        page.waitForSelector("#search")

        browser.close()
    }
}
`}</code></pre>
    </CodeBlock>
  </Details>
</section>

<style>
  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-block: 1.5rem;
  }
  /* The shared plain-`a` underline (static/assets/style.css) is wrong for
     buttons; remove it here only. */
  .hero-actions :global(a.button),
  .hero-actions :global(a.button:hover),
  .hero-actions :global(a.button:focus) {
    text-decoration: none;
  }
  /* Override the shared .repo-list rule (static/assets/style.css) for this
     page only: bullet points instead of the border-bottom line separator
     between items. Scoped to this component, so /about/, /app/, and
     /how-to-start-learning-automatic-testing/ keep the line-separator style. */
  .repo-list {
    list-style: disc;
    padding-inline-start: 1.5rem;
  }
  .repo-list li {
    padding: 0.2rem 0;
    border-bottom: none;
  }
</style>
