---
layout: single
permalink: /zh/
title: 关于我
lang: zh-CN
translation_url: /
description: 杨思敏，香港科技大学博士研究生，研究触觉交互与触觉设备，曾任大疆产品经理。
author_profile: true
---

{% include language-context.html %}

<h2 id="profile">个人介绍</h2>

我是**杨思敏（Simin Yang）**，现为[香港科技大学（HKUST）](https://hkust.edu.hk/)博士研究生，主要研究**触觉交互与触觉设备**。我师从 [Pan Hui 教授](https://panhui.people.ust.hk/index.html)，他是**英国皇家工程院国际院士（FREng）**、**ACM 杰出科学家**、**IEEE 会士（IEEE Fellow）**与**欧洲科学院（Academia Europaea）院士（MAE）**。我曾任**大疆产品经理**，致力于将**学术前沿研究、工程落地与产品开发**结合起来。

<h2 id="education">教育背景</h2>

- **博士在读**，香港科技大学，**2021 年至今**。
- **工学学士，信息工程**，华南理工大学冯秉铨实验班，**2015–2019 年**。

<h2 id="work-experience">工作经历</h2>

- **产品经理**，大疆，**2019–2021 年**。

<h2 id="news">最新动态</h2>

{% assign news_items = site.data.news | sort: 'date' | reverse %}
{% for item in news_items %}
- **{{ item.date | date: '%Y年%m月' }}：** {{ item.text_zh | default: item.text | markdownify | remove: '<p>' | remove: '</p>' | strip }} [{{ item.link_label_zh | default: item.link_label }}]({{ item.url }})
{% endfor %}

<h2 id="selected-papers">精选论文</h2>

[全部论文]({{ '/zh/publications/' | relative_url }}) · [Google Scholar]({{ site.author.googlescholar }}) · [ORCID]({{ site.author.orcid }})

{% assign selected_papers = site.publications | where: 'selected', true | sort: 'date' | reverse %}
{% for publication in selected_papers %}
{% include profile-publication.html publication=publication %}
{% endfor %}

<h2 id="honors-and-awards">荣誉与奖项</h2>

- 🥇 **2025 年 — 金奖**，中国国际大学生创新大赛，项目：**基于仿生复眼结构的超薄视触觉传感器**。
- 🥈 **2025 年 — 银奖**，Hong Kong Techathon+，可信人工智能与数据科学（公开组），**CardioQuest VR**。[香港科技大学报道](https://ais.hkust.edu.hk/whats-happening/news/ais-students-excel-hong-kong-techathon-2025)
- 🏅 **2024 年 — Honorable Mention（荣誉提名）**，ACM Annual Symposium on Computer-Human Interaction in Play，**The Jade Gateway to Exergaming**。[获奖记录](https://pure.au.dk/portal/en/prizes/acm-chi-play-2024-honorable-mention)
- 🥉 **2024 年 — 三等奖（iCANX Innovation Award）**，iCAN International Contest of Innovation，**CardioQuest VR**。[项目介绍](https://www.mu-sic.tohoku.ac.jp/ican/attach/Innovation%20Award.pdf)
- 🏅 **2024 年 — 优异奖**，第十届香港大学生创新及创业大赛，**CardioQuest VR**。[官方获奖名单](https://www.hkchallengeplus.com/wp-content/uploads/2024/06/%E5%BE%97%E5%A5%AC%E5%90%8D%E5%96%AE_%E8%8B%B1_new-1.pdf)
- 🏅 **2024 年 — 半决赛入围**，Bangkok Business Challenge。
- 🏅 **2018 年 — 国家级荣誉称号**，小平科技创新团队。
- 🏆 **2017、2018 年 — 全国冠军**，RoboMaster Robotics Competition。

<h2 id="patents">专利</h2>

**1 项美国专利 · 4 项中国发明专利（已授权）· 4 项中国实用新型专利 · 1 项中国外观设计专利**

- **美国专利：** 面向行星与卫星（太空）应用的聚光太阳能系统 — IP.PA.02012.US.2
- **中国发明专利（已授权）：**
  - 集成室温感知的智能控温水杯 — CN201710396735.4
  - 网球储存机构与方法 — CN201810953474.6
  - 速度与轨迹可控的飞盘发射机构 — CN201710520381.X
  - 带辅助支撑与定位功能的全向轮式底盘 — CN201710510637.9

<h2 id="skills-and-certification">技能与认证</h2>

**技能：** Python、C/C++、C#、PyTorch、Axure、Figma、ATLAS.ti、Unity、Unreal Engine 5 与统计分析。

**认证：** PMP。
