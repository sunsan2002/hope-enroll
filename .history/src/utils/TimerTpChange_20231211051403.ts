import { ref } from "vue";

export default function () {
  var backtp = ref(0);

  setInterval(() => {
    backtp.value = (backtp.value + 1) % 2;
  }, 8000);

  return backtp;
}
