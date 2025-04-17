---
layout: post
title: "언리얼 엔진 UMG란? 초보자를 위한 UI 제작 가이드"
date: 2025-04-17
categories: [Unreal Engine, UI/UX]
tags: [UMG, 언리얼엔진 UI, 게임 UI, 블루프린트, 초보자 가이드]
description: "언리얼 엔진의 UMG(User Widget)를 활용해 초보자도 손쉽게 게임 UI를 제작하는 방법을 소개합니다."
keywords: "언리얼 엔진, UMG, 게임 UI, UI 제작, UE5, 블루프린트, 초보자"
---

# 언리얼 엔진 UMG란? 초보자를 위한 UI 제작 가이드

언리얼 엔진에서 게임 속 인터페이스를 구성하는 가장 대표적인 시스템이 **UMG (Unreal Motion Graphics)** 입니다.  
UI 디자인은 사용자 경험(UX)의 핵심이며, 게임의 몰입도에 직접적인 영향을 주는 요소죠.

초보자도 **코딩 없이도 시각적으로 UI를 만들 수 있는** 것이 UMG의 가장 큰 장점입니다.

---

## 🔍 UMG의 핵심 개념

UMG는 언리얼 엔진 내에서 제공하는 **시각적 UI 제작 도구**입니다.  
`User Widget`을 생성하여 HUD, 메뉴, 버튼, 텍스트 등 모든 UI 요소를 구성할 수 있습니다.

- **디자이너와 프로그래머 모두를 위한 툴**
- 블루프린트 기반으로 동작 → 코딩 없이도 기능 구현 가능
- 모바일/PC/콘솔 등 멀티 플랫폼 대응

---

## 🛠️ UI 제작 기본 흐름

1. **User Widget 생성**
   - 콘텐츠 브라우저 > 우클릭 > `User Interface > Widget Blueprint`

2. **디자인 작업**
   - 버튼, 텍스트, 이미지 등 드래그 앤 드롭 배치
   - `Canvas Panel`을 활용해 자유롭게 위치 지정

3. **게임에 UI 적용**
   - 블루프린트 예시:
     ```blueprint
     Create Widget → Add to Viewport
     ```
   - 또는 C++ 코드:
     ```cpp
     UUserWidget* UI = CreateWidget<UUserWidget>(GetWorld(), MyWidgetClass);
     UI->AddToViewport();
     ```

---

## 📦 자주 사용하는 위젯 요소들

| 위젯 컴포넌트 | 기능 예시 |
|----------------|-----------|
| **Text**       | 타이틀, 설명문구 표시 |
| **Button**     | 클릭 이벤트 처리 |
| **ProgressBar**| 체력, 경험치 바 |
| **Image**      | 아이콘, 배경 이미지 |
| **HorizontalBox / VerticalBox** | 정렬 레이아웃 구성 |

---

## 📘 초보자 팁: UMG로 UI 인터랙션 만들기

- **버튼 클릭 이벤트 바인딩**
  - 위젯의 버튼 선택 → `OnClicked` 이벤트에서 원하는 동작 설정
- **반응형 UI 만들기**
  - Anchor와 Size Box를 활용하면 다양한 해상도에 대응 가능
- **UI 숨김/표시 전환**
  - `SetVisibility` 노드를 활용하면 간단히 구현 가능

---

## ✅ 마무리하며

UMG는 언리얼 엔진 사용자라면 반드시 익혀야 할 필수 기능입니다.  
특히 초보자에게는 "게임의 뼈대"보다 눈에 보이는 **UI 요소부터 구현해보는 것**이 동기부여와 학습 효과를 동시에 줍니다.

처음에는 텍스트 한 줄, 버튼 하나로 시작하세요.  
곧 여러분은 게임 HUD, 메인 메뉴, 설정 창까지 멋지게 구성할 수 있을 거예요.  
그리고 UMG로 만든 UI는 실제 프로젝트에서 바로 사용 가능한 강력한 자산이 될 수 있습니다.

> 🧠 **지금이 시작할 때입니다. 블루프린트 하나로 나만의 UI를 만들어보세요.**
