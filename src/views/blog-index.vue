<template>
  <!-- 背景 -->
  <div
    class="w-full pt-7.5rem pb-7.5rem min-h-1000px bg-#1E1F1E text-white flex flex-col items-center"
  >
    <div>
      <!-- logo -->
      <div text-3rem font-700 mb-1rem class="logoFont">
        <div>Hello</div>
        <div>I'm Links.</div>
      </div>
      <!-- slogan -->
      <div class="sloganFont text-20px text-#979797 mb-1.5rem">
        <div v-for="slogan in sloganList" :key="slogan.id" mb-0.625rem>
          {{ slogan.value }}
        </div>
      </div>
      <!-- 跳转 -->
      <div flex mb-3.75rem>
        <a
          class="h-2.5rem pl-0.75rem pr-12px mr-10px rounded-6px flex items-center pointer iconNoHover"
          :href="icon.href"
          v-for="icon in iconsList"
          :key="icon.id"
        >
          <i class="text-20px mr-6px" :class="icon.iconName"></i>
          <span>{{ icon.content }}</span>
        </a>
      </div>
      <!-- 工程展示 -->
      <div mb-3.75rem>
        <div flex items-center text-1.75rem justify-between mb-1rem>
          <div class="sloganFont font-600">Projects</div>
          <i class="iconfont icon-youshangjiaojiantou arrorNoSel pointer"></i>
        </div>
        <div flex w-full justify-between flex-wrap>
          <a
            class="w-394px mr-10px pl-16px pt-1rem pb-1rem pointer rounded-8px mb-12px flex items-center projectNoHover"
            v-for="project in projectList"
            :key="project.id"
            :href="project.href"
          >
            <i class="text-blue text-38px mr-1rem" :class="project.icon"></i>

            <div>
              <div font-500>{{ project.title }}</div>
              <div class="text-#929293 text-0.875rem">
                {{ project.introduction }}
              </div>
            </div>
          </a>
        </div>
      </div>
      <!-- 博客展示 -->
      <div>
        <div flex items-center text-1.75rem justify-between mb-1rem>
          <div class="sloganFont font-600">Posts</div>
          <i class="iconfont icon-youshangjiaojiantou arrorNoSel pointer"></i>
        </div>
        <div flex flex-col text-1.125rem>
          <a
            class="w-full flex items-center justify-between p-0.75rem rounded-0.375rem pointer blogHover"
            v-for="blog in blogList"
            :key="blog.id"
            :href="blog.href"
          >
            <div>{{ blog.title }}</div>
            <span class="text-#787878">{{ blog.time }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBlogStore } from '@/stores/blogIndexStore'
const blogStore = useBlogStore()
const { iconsList, projectList, sloganList, blogList } = storeToRefs(blogStore)
</script>

<style scoped>
.logoFont {
  font-family: Hubot Sans;
  font-weight: 700;
  letter-spacing: 1px;
}
.sloganFont {
  font-family: Hubot Sans;
}
.iconNoHover {
  background-color: #343435;
  transition: all 0.3s;
}
.iconNoHover:hover {
  background-color: #fff;
  color: #343435;
  transition: all 0.3s;
}
.arrorNoSel {
  font-weight: 600;
  font-size: 1.75rem;
  opacity: 0.5;
  transition: all 0.3s;
}
.arrorNoSel:hover {
  opacity: 1;
  transition: all 0.3s;
}

.projectNoHover {
  background-color: #343435;
  transition: all 0.3s;
}
.projectNoHover:hover {
  background-color: #4a4a4a;
  transition: all 0.3s;
}
.blogHover {
  transition: all 0.3s;
}
.blogHover:hover {
  background-color: #343435;
  transition: all 0.3s;
}
a {
  text-decoration: none;
  color: white;
}
</style>
