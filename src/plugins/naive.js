import { createApp } from 'vue'
import {
  create,
  NButton,
  NGrid,
  NGi,
  NH1,
  NInput,
  NIcon,
  NCard,
  NTag,
  NSkeleton,
  NLayout,
  NAvatar
} from 'naive-ui'

const naive = create({
  components: [NButton, NGrid, NGi, NH1, NInput, NIcon, NCard, NTag, NSkeleton, NLayout, NAvatar]
})

export default naive;