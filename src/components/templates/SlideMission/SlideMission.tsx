'use client'
import * as React from 'react'
import SlideMissionModel from '@/components/atoms/SlideMissionModel'
export const SlideMission = () => {
  return (
    <section className="mt-30">
      <SlideMissionModel
        isRtl={false}
        slide1="SEGUROS"
        slide2="SEGURANÇA"
        slide3="QUALIDADE"
        slide4="HISTÓRIA"
      />
      <SlideMissionModel
        isRtl={true}
        slide1="AGILIDADE"
        slide2="SOLUÇÕES"
        slide3="CREDIBILIDADE"
        slide4="CONFIANÇA"
      />
    </section>
  )
}

export default SlideMission
