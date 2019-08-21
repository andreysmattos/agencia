<template>
	<section>
		<h2>Contato</h2>
		<h1>Entre em contato</h1>

		<form class="row">
			<div class="col-md-6">
				<form action="">
					<input class="form form__input" type="text" placeholder="Seu nome">
					<input type="text" class="form form__input" placeholder="Seu E-mail">
					<input type="text" class="form form__input" placeholder="Celular">
				</form>
			</div>

			<div class="col-md-6">
				<textarea class="form form__input" name="" placeholder="Mensagem..." style="height: 208px"></textarea>
			</div>

			<div class="col d-flex justify-content-center">
				<button class="button button__orange"> Enviar Mensagem</button>
			</div>
		</form>

	</section>
</template>

<script>
	// import imageThumb from '../../../mixins/imageThumb'
	// import { mapGetters } from "vuex";

	export default {
		props: {
			// pae: {
			// 	type: Object,
			// 	default: {}
			// }
		},
		computed: {
			// ...mapGetters('startpack', ['getBaseURL'])
		}
	}
</script>

<style scoped>
.button {
	margin-top: 6rem;
}


</style>