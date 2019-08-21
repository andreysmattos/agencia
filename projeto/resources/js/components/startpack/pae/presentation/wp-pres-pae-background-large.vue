<template>
	<section class="main-element" :style="{'backgroundImage': 'url(' + getImage({
		'name': imageByName(pae,'background'),
		'path': 'paes',
		'width': 1920,
		'height': 850,
		'size': 'l'
	}) +')' }">
		<div class="container">
			<div class="row">
				<div class="col-md-6"></div>

				<div class="col-md-6">
					<h1 class="title">{{pae.title}}</h1>
					<h3 class="second-title">{{pae.subtitle}}</h3>
					<p class="text" v-html="pae.content"></p>
					<div class="row">

						<div class="col-sm-4">
							<a target="_blank" href="http://gramadoinesquecivel.tur.br/onde-ficar" class="button button--bg-second">Onde ficar</a>
						</div>

						<div class="col-sm-4">
							<a target="_blank" href="http://gramadoinesquecivel.tur.br/onde-comer" class="button button--bg-second">Onde comer</a>
						</div>

						<div class="col-sm-4">
							<a target="_blank" href="http://gramadoinesquecivel.tur.br/o-que-fazer" class="button button--bg-second">Onde ir</a>
						</div>

					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import imageThumb from '../../../mixins/imageThumb'
	import { mapGetters } from "vuex";

	export default {
		props: {
			pae: {
				type: Object,
				default: {}
			}
		},
		computed: {
			...mapGetters('startpack', ['getBaseURL'])
		},
		mixins: [imageThumb]
	}
</script>

<style scoped>
.main-element {
	background-size: cover;
	background-position: center right;
	background-repeat: no-repeat;
	padding-top: 11rem;
	padding-bottom: 11rem;
}

.main-element .title {
	font-size: 6.8rem;
	margin-bottom: 2.5rem;
}

.main-element .second-title {
	font-size: 2.8rem;
	margin-bottom: 2.5rem;
}

.main-element .text {
	margin-bottom: 3rem;
}

.main-element .button {
	margin-bottom: 10px;
}


@media screen and (max-width: 991.98px){
	.main-element .title {
		font-size: 5.8rem;
	}
}

</style>