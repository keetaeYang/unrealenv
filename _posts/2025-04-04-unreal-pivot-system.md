---
layout: post
title: "언리얼 엔진에서 피벗(Pivot)을 정확히 이해해야 하는 이유와 활용법"
date: 2025-04-03
categories: [Unreal Engine, 모델링 팁]
tags: [언리얼 엔진, 피벗 포인트, 작업 효율, 3D 모델링, 게임 개발]
description: "언리얼 엔진의 피벗(Pivot) 개념은 3D 모델링과 배치, 애니메이션 제작의 효율성을 좌우하는 핵심 요소입니다. 실무에서 피벗을 정확히 설정하고 활용하는 방법을 자세히 설명합니다."
keywords: "언리얼 엔진 피벗, Pivot 설정, UE5 모델링, 3D 피벗 위치 조정, 게임개발 워크플로우"
---

# 언리얼 엔진에서 피벗(Pivot)을 정확히 이해해야 하는 이유와 활용법

3D 씬 구성에서 "피벗(Pivot)"이라는 단어, 많이 들어보셨죠? 언리얼 엔진에서 **피벗은 오브젝트의 회전, 이동, 스케일의 중심점**을 의미합니다.  
이 위치가 정확하지 않으면 모델 배치가 어긋나고, 애니메이션이나 인터랙션도 비자연스럽게 됩니다.

---

## 🎯 피벗이 중요한 이유

- **배치 정확도 향상**: 피벗이 정확하면 오브젝트를 원하는 위치에 빠르게 정렬할 수 있습니다.
- **자연스러운 회전**: 예를 들어, 문 모델의 피벗이 정중앙에 있다면 열고 닫는 애니메이션이 어색해질 수 있습니다.
- **스크립트 제어 최적화**: 피벗 기준으로 좌표 계산이 간단해지므로, 프로그래밍에서도 일관된 결과를 얻을 수 있습니다.

---

## 🛠 피벗 위치 임시 이동 방법 (에디터 내부)

언리얼 엔진은 피벗을 임시로 옮겨 사용할 수 있습니다:

- `Alt + Middle Mouse Drag`: 임시 피벗 이동
- `Right Click > Pivot > Set as Pivot Offset`: 현재 위치를 피벗으로 지정
- `Right Click > Pivot > Reset Pivot Offset`: 초기화

> ⚠️ 이 방법은 세션을 종료하거나 이동 시 리셋됩니다.

---

## 🔐 영구적으로 피벗을 설정하는 법

### 1. Static Mesh Editor에서

1. 콘텐츠 브라우저에서 메시 더블 클릭
2. 오른쪽 `Details` → `Transform > Pivot Offset` 직접 수정
3. 저장 후, 영구적으로 적용됨

### 2. 블루프린트 또는 C++ 코드 사용

언리얼 엔진에서는 블루프린트나 C++를 통해 피벗 위치와 유사한 효과를 줄 수 있습니다.  
대표적인 방식은 **컴포넌트 계층 구조를 재설계하거나, 메시의 상대 위치를 조정하는 방법**입니다.

#### 예시: C++에서 컴포넌트 피벗 위치 보정

```cpp
// 헤더 파일 (.h)
UPROPERTY(VisibleAnywhere)
USceneComponent* PivotRoot;

UPROPERTY(VisibleAnywhere)
UStaticMeshComponent* MeshComp;

// 소스 파일 (.cpp)
PivotRoot = CreateDefaultSubobject<USceneComponent>(TEXT("PivotRoot"));
RootComponent = PivotRoot;

MeshComp = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("MeshComp"));
MeshComp->SetupAttachment(PivotRoot);

// 피벗 효과를 위해 메시를 이동
MeshComp->SetRelativeLocation(FVector(-50.f, 0.f, 0.f));

### ✨ 마무리하며

피벗(Pivot)은 단순한 위치 지정 도구를 넘어, **작업 효율성과 현실감을 좌우하는 핵심 요소**입니다.  
특히 **언리얼 엔진에서 정밀한 씬 구성이나 인터랙션이 중요한 게임 및 시각화 프로젝트**에서 피벗 설정은 개발의 완성도를 크게 좌우합니다.

정확한 피벗 설정을 통해 더 빠르게, 더 직관적으로 작업을 진행해보세요.  
정렬이 쉬워지고, 애니메이션이 자연스러워지며, 최적화에도 유리합니다.

---

> 🔎 **추가 팁**: 정밀한 피벗 설정은 Google AdSense 승인을 위한 **전문성 있는 콘텐츠 제작**에도 도움이 됩니다.  
> 이런 실무형 주제를 지속적으로 다루는 블로그는 검색엔진에서도 높은 평가를 받을 수 있어요!