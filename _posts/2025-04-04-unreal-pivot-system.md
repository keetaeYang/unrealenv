---
layout: post
title: "언리얼 엔진 피벗(Pivot) 이해와 활용법"
date: 2025-04-04
categories: [Unreal Engine, 기능 설명]
tags: [언리얼 엔진, 피벗 포인트, 작업 효율, 3D 모델링, UE5]
description: "언리얼 엔진에서 피벗(Pivot) 시스템의 개념과 사용법을 자세히 알아보고, 피벗을 활용한 효율적인 작업 방법을 소개합니다."
keywords: "언리얼 엔진, 피벗 이동, 피벗 설정, 언리얼 피벗 고정, UE5 피벗, 3D 모델 피벗 위치"
---

## 언리얼 엔진의 피벗(Pivot)이란?

언리얼 엔진에서 **피벗(Pivot)** 은 오브젝트의 중심 기준점입니다. 이 피벗을 기준으로 오브젝트의 회전, 이동, 스케일이 결정되죠.  
피벗 위치가 올바르게 설정되지 않으면 배치, 회전, 정렬이 굉장히 불편해집니다.

> 예를 들어, 문 모델의 피벗이 중심에 있으면 열고 닫기 어려워지고, 한쪽 경첩 위치로 피벗을 옮기면 자연스러운 회전이 가능합니다.

---

## 기본 피벗 조작법

언리얼 엔진에서는 기본적으로 **피벗은 임시적으로 이동 가능**하며, 아래 방법으로 조작할 수 있습니다:

- **Alt + Middle Mouse Drag** → 피벗 임시 이동  
- **Right-Click → Pivot → Set as Pivot Offset** → 임시 피벗 위치 설정  
- **Right-Click → Pivot → Reset Pivot Offset** → 원래 위치로 복구  

> ⚠️ 이 방식은 월드에 저장되는 것이 아니라, 세션 종료 시 초기화됩니다.

---

## 피벗을 고정하려면?

### 1. **스태틱 메시 에디터에서 설정**

1. 메시 선택 후 → Static Mesh Editor 열기  
2. 오른쪽 Details 패널 → Transform → Pivot Offset 직접 수정  
3. 저장 후, 피벗 위치가 반영됨

### 2. **블루프린트/코드에서 직접 설정**

```cpp
UStaticMeshComponent* MeshComp = ...;
MeshComp->SetRelativeLocation(FVector(NewPivotOffset));

