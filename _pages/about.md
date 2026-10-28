---
permalink: /
title: "About Me"
author_profile: true
lang: en
translation_url: /zh/
redirect_from:
  - /about/
  - /about.html
---

## Profile

I am **Simin Yang**, a Ph.D. candidate at [The Hong Kong University of Science and Technology (HKUST)](https://hkust.edu.hk/) specializing in **haptic interaction and haptic devices**. I am supervised by [Prof. Pan Hui](https://panhui.people.ust.hk/index.html), an **International Fellow of the Royal Academy of Engineering (FREng)** and a **Member of Academia Europaea (MAE)**. As a **former Product Manager at DJI**, I bring together **frontier academic research, engineering implementation, and product development**.

## Education

- **Ph.D**, HONG KONG University of Science and Technology, **2021-Now**.
- **B.S., Information Engineering**, Feng Bingquan Experimental Class, South China University of Technology, **2015–2019**.

## Work Experience

- **Product Manager**, DJI, **2019–2021**.


## News

{% assign news_items = site.data.news | sort: 'date' | reverse %}
{% for item in news_items %}
- **{{ item.label }}:** {{ item.text | markdownify | remove: '<p>' | remove: '</p>' | strip }} [{{ item.link_label }}]({{ item.url }})
{% endfor %}

## Selected Papers

[All publications]({{ '/publications/' | relative_url }}) · [Google Scholar]({{ site.author.googlescholar }}) · [ORCID]({{ site.author.orcid }})

{% assign selected_papers = site.publications | where: 'selected', true | sort: 'date' | reverse %}
{% for publication in selected_papers %}
{% include profile-publication.html publication=publication %}
{% endfor %}

## Honors and Awards

- 🥇 **2025 — Gold Award**, China International College Students' Innovation Competition, for an **ultrathin visuotactile sensor based on a biomimetic compound-eye structure**.

- 🥈 **2025 — Silver Award**, Hong Kong Techathon+, Trusted AI & Data Science (Open Group), **CardioQuest VR**. [HKUST announcement](https://ais.hkust.edu.hk/whats-happening/news/ais-students-excel-hong-kong-techathon-2025)
- 🏅 **2024 — Honorable Mention**, ACM Annual Symposium on Computer-Human Interaction in Play, **The Jade Gateway to Exergaming**. [Award record](https://pure.au.dk/portal/en/prizes/acm-chi-play-2024-honorable-mention)
- 🥉 **2024 — Third Prize (iCANX Innovation Award)**, iCAN International Contest of Innovation, **CardioQuest VR**. [Project profile](https://www.mu-sic.tohoku.ac.jp/ican/attach/Innovation%20Award.pdf)
- 🏅 **2024 — Merit Prize**, 10th Hong Kong University Student Innovation and Entrepreneurship Competition, **CardioQuest VR**. [Official results](https://www.hkchallengeplus.com/wp-content/uploads/2024/06/%E5%BE%97%E5%A5%AC%E5%90%8D%E5%96%AE_%E8%8B%B1_new-1.pdf)
- 🏅 **2024 — Semi-finalist**, Bangkok Business Challenge.
- 🏅 **2018 — National Honorary Title**, Xiaoping Science and Technology Innovation Team.
- 🏆 **2017 & 2018 — National Champion**, RoboMaster Robotics Competition.

## Patents

**Patents**: **1 U.S. patent · 4 CN invention (granted) · 4 CN utility model · 1 CN design**

- **U.S.:** Concentrated Solar Systems for Planet and Satellite (Space) Applications — IP.PA.02012.US.2
- **CN Invention (granted):**
  - Intelligent temperature-control cup integrating room-temperature sensing — CN201710396735.4
  - Tennis ball storage mechanism and method — CN201810953474.6
  - Disc launching mechanism with controllable speed and trajectory — CN201710520381.X
  - Omni-directional wheeled chassis with assisted support and positioning — CN201710510637.9

## Skills and Certification

**Skills:** Python, C/C++, C#, PyTorch, Axure, Figma, ATLAS.ti, Unity, Unreal Engine 5, and statistical analysis.

**Certification:** PMP.
